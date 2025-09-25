'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

// AI Elements components
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton
} from '@/components/ai-elements/conversation';
import { 
  Message, 
  MessageContent, 
  MessageAvatar 
} from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInputToolbar
} from '@/components/ai-elements/prompt-input';
import { Loader } from '@/components/ai-elements/loader';

export default function ChatAIElements() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && status === 'ready') {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto" style={{ height: 'calc(100vh - 64px)' }}>
      <Conversation className="flex-1 relative">
        <ConversationContent className="p-4">
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
            <>
              {messages.map((message) => (
                <Message key={message.id} from={message.role as 'user' | 'assistant' | 'system'}>
                  <MessageContent>
                    {message.parts.map((part) =>
                      part.type === 'text' ? part.text : null
                    ).filter(Boolean).join('')}
                  </MessageContent>
                  <MessageAvatar 
                    src={message.role === 'user' ? '/user-avatar.jpg' : '/cat-avatar.jpg'}
                    name={message.role === 'user' ? 'User' : 'AI Assistant'}
                  />
                </Message>
              ))}
              {status === 'submitted' && (
                <Message from="assistant">
                  <MessageContent>
                    <Loader />
                  </MessageContent>
                  <MessageAvatar src="/cat-avatar.jpg" name="AI Assistant" />
                </Message>
              )}
            </>
          )}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="border-t bg-background">
        <div className="p-4">
          <PromptInput onSubmit={handleSubmit} className="relative">
            <PromptInputTextarea
              autoFocus
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="min-h-[44px] max-h-[200px]"
            />
            <PromptInputToolbar className="absolute right-2 bottom-0">
              <PromptInputSubmit
                disabled={!input?.trim() || status !== 'ready'}
              />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}