'use client';

import { useChat, useCompletion } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useRef, useState, useEffect, useMemo, KeyboardEvent, ChangeEvent, FormEvent } from 'react';
import debounce from 'lodash.debounce';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, User, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Chat() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const {
    completion,
    complete,
    isLoading: isCompletionLoading,
    stop: stopCompletion,
  } = useCompletion({
    api: '/api/completion',
    experimental_throttle: 50,
    onError: (error) => {
      console.error('Completion error:', error);
    },
  });

  const completeRef = useRef(complete);
  completeRef.current = complete;

  // Create a debounced version of the complete function
  const debouncedComplete = useMemo(
    () => debounce((value: string) => {
      if (value.length > 3) {
        completeRef.current(value);
      }
    }, 300),
    []
  );

  // Handle tab key to accept suggestion
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && completion) {
      e.preventDefault();
      setInput(input + ' ' + completion);
      debouncedComplete(input + ' ' + completion);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    stopCompletion();
    debouncedComplete.cancel(); 
    debouncedComplete(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && status === 'ready') {
      sendMessage({ text: input });
      setInput('');
      // Cancel any pending completions
      stopCompletion();
      debouncedComplete.cancel(); 
    }
  };

  const showSuggestion = completion && input.length > 3 && !input.endsWith(completion);

  return (
    <div className="flex flex-col max-w-4xl mx-auto" style={{ height: 'calc(100vh - 56px)' }}>
      <div className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <div className="mx-auto h-12 w-12 mb-4 relative">
                    <Image
                      src="/cat-avatar.jpg"
                      alt="AI Assistant"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-medium">Start a conversation</h3>
                  <p className="text-sm">Send a message to begin chatting with the AI agent.</p>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8">
                      <Image
                        src="/cat-avatar.jpg"
                        alt="AI Assistant"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </Avatar>
                  )}
                  <Card
                    className={`max-w-[70%] p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="text-sm">
                      {message.parts.map((part, index) =>
                        part.type === 'text' ? <span key={index}>{part.text}</span> : null
                      )}
                    </div>
                    <span className="text-xs opacity-70 mt-1 block">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </Card>
                  {message.role === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))
            )}
            {status === 'submitted' && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <Image
                    src="/cat-avatar.jpg"
                    alt="AI Assistant"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </Avatar>
                <Card className="bg-muted p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.1s]" />
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="border-t bg-background">
        {/* Suggestion Bar */}
        {(showSuggestion || isCompletionLoading) && input.length > 0 && (
          <div className="px-20 pt-3 pb-1">
            <div className="relative">
              {isCompletionLoading ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 bg-muted/50 rounded-md">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  <span>Generating suggestion...</span>
                </div>
              ) : completion ? (
                <div className="p-2 bg-muted/50 rounded-md">
                  <div className="text-sm">
                    <span className="text-foreground">{input}{' '}</span>
                    <span className="text-muted-foreground opacity-50">
                      {completion}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Press <kbd className="px-1 py-0.5 text-xs bg-background border rounded">Tab</kbd> to accept
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}

        <div className="py-4 px-20">
          <form 
            onSubmit={handleSubmit} 
            className="flex gap-2"
          >
            <Input
              autoFocus
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" disabled={!input?.trim() || status !== 'ready'}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}