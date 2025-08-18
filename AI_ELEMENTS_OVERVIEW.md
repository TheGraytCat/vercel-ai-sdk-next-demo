# Vercel AI Elements Overview

## What is AI Elements?

AI Elements is a component library and custom registry built on top of shadcn/ui, designed to help developers build AI-native applications faster. It's part of the Vercel AI SDK ecosystem and provides pre-built, customizable components for common AI interaction patterns.

## Key Characteristics

### Direct Integration
- Components are added directly to your project's codebase (not installed as a package)
- You own and control the code
- Can be modified and extended as needed

### Built on shadcn/ui
- Leverages the popular shadcn/ui component system
- Follows similar patterns and conventions
- Maintains consistency with existing shadcn components

### Extensibility
- Components extend standard HTML attributes
- Highly customizable styling
- CLI preserves custom changes during updates

### Framework Support
- Built for React applications
- Works seamlessly with Next.js
- Integrates with the Vercel AI SDK
- Supports multiple AI providers (OpenAI, Anthropic, X AI)

## Installation

```bash
npx ai-elements@latest
```

## Core Components

### 1. Conversation
Wraps messages in a chat interface with automatic scrolling functionality.

**Features:**
- Auto-scrolls to bottom when new messages arrive
- Smooth scrolling behavior
- Scroll button appears when not at bottom
- Responsive and accessible design

**Usage:**
```typescript
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton
} from '@/components/ai-elements/conversation';

<Conversation className="relative w-full" style={{ height: '500px' }}>
  <ConversationContent>
    {/* Messages go here */}
  </ConversationContent>
  <ConversationScrollButton />
</Conversation>
```

### 2. Message
Displays chat interface messages from users, assistants, or system.

**Features:**
- Automatic alignment based on sender role
- Avatar support with fallback initials
- Different background colors for different roles
- Flexible content rendering

**Props:**
- `from`: "user" | "assistant" | "system"
- Accepts standard HTML div attributes

**Usage:**
```typescript
import { Message, MessageContent, MessageAvatar } from '@/components/ai-elements/message';

<Message from="user">
  <MessageContent>Hi there!</MessageContent>
  <MessageAvatar src="/avatar.jpg" name="User" />
</Message>

<Message from="assistant">
  <MessageContent>Hello! How can I help you today?</MessageContent>
  <MessageAvatar src="/ai-avatar.jpg" name="AI" />
</Message>
```

### 3. Image
Displays AI-generated images from the AI SDK.

**Features:**
- Accepts `Experimental_GeneratedImage` objects
- Automatic rendering of AI-generated content
- Seamless integration with `generateImage` function

**Usage:**
```typescript
import { Image } from '@/components/ai-elements/image';

<Image src={generatedImage} />
```

### 4. Prompt Input
Interactive input component for sending messages to LLMs.

**Features:**
- Auto-resizing textarea
- Submit button with dynamic status icons
- Keyboard shortcuts (Cmd/Ctrl + Enter)
- Model selection dropdown
- Customizable toolbar
- Mobile-friendly design

**Components:**
- `PromptInput`: Root form element
- `PromptInputTextarea`: Message input area
- `PromptInputToolbar`: Additional controls container
- `PromptInputSubmit`: Submission button
- `PromptInputModelSelect`: Model selector

**Usage:**
```typescript
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
  PromptInputToolbar,
  PromptInputModelSelect
} from '@/components/ai-elements/prompt-input';

<PromptInput onSubmit={handleSubmit}>
  <PromptInputTextarea 
    onChange={(e) => setValue(e.target.value)} 
    value={value}
    placeholder="Type your message..."
  />
  <PromptInputToolbar>
    <PromptInputModelSelect />
    <PromptInputSubmit
      disabled={!value.trim()}
      status={status}
    />
  </PromptInputToolbar>
</PromptInput>
```

## Complete Component List

1. **Actions** - Action buttons for messages
2. **Branch** - Branching conversation flows
3. **Code Block** - Syntax-highlighted code display
4. **Conversation** - Chat container with scrolling
5. **Image** - AI-generated image display
6. **Inline Citation** - Citation references
7. **Loader** - Loading indicators
8. **Message** - Chat message display
9. **Prompt Input** - User input interface
10. **Reasoning** - AI reasoning display
11. **Response** - AI response rendering
12. **Sources** - Source attribution
13. **Suggestion** - Suggestion chips
14. **Task** - Task status indicators
15. **Tool** - Tool invocation display
16. **Web Preview** - Web content preview

## Integration with AI SDK

### Using with useChat Hook
```typescript
'use client';

import { useChat } from '@ai-sdk/react';
import { 
  Conversation, 
  ConversationContent,
  Message, 
  MessageContent,
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit
} from '@/components/ai-elements';

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat();
  
  return (
    <div className="flex flex-col h-screen">
      <Conversation className="flex-1">
        <ConversationContent>
          {messages.map((message) => (
            <Message key={message.id} from={message.role}>
              <MessageContent>
                {message.content}
              </MessageContent>
            </Message>
          ))}
        </ConversationContent>
      </Conversation>
      
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea 
          value={input}
          onChange={handleInputChange}
        />
        <PromptInputSubmit status={status} />
      </PromptInput>
    </div>
  );
}
```

## Key Concepts

### Component Philosophy
- Components are building blocks, not complete solutions
- Designed to be composed together
- Focus on flexibility over rigid patterns
- Built on shadcn/ui patterns for consistency

### Message Parts
Messages can contain different types of content:
- Text responses
- Tool invocations
- Images
- Code blocks
- Citations and sources
- Other structured data

### Styling Approach
- Uses Tailwind CSS classes
- Follows shadcn/ui conventions
- CSS variables for theming
- Fully customizable via className props

## Benefits

1. **Ownership**: Code lives in your repository
2. **Customization**: Modify components to match your design system
3. **Type Safety**: Full TypeScript support
4. **No Lock-in**: Components can be modified or replaced
5. **Best Practices**: Built-in patterns for AI interactions
6. **shadcn/ui Integration**: Consistent with existing component systems
7. **Provider Flexibility**: Works with multiple AI providers

## Use Cases

- Chat interfaces
- AI-powered text generation
- Streaming responses
- Multi-modal AI interactions
- Tool/function calling displays
- Code generation interfaces
- Image generation displays
- Document analysis tools
- Customer support bots

## Getting Started

1. Install AI Elements using the CLI:
   ```bash
   npx ai-elements@latest
   ```

2. Select components to install when prompted

3. Import components into your React application

4. Customize styles and behavior as needed

5. Use with AI SDK hooks for functionality

## Best Practices

1. **Component Composition**: Combine multiple components for complex interfaces
2. **Accessibility**: Ensure proper ARIA labels and keyboard navigation
3. **Error Handling**: Implement error states for failed AI requests
4. **Loading States**: Use Loader components during AI processing
5. **Responsive Design**: Test on various screen sizes
6. **Performance**: Implement virtualization for long conversation histories

## Summary

Vercel AI Elements provides a comprehensive foundation for building AI interfaces in React applications. By combining the flexibility of shadcn/ui with purpose-built AI components, it accelerates development while maintaining full control over the implementation. The library's approach of adding components directly to your codebase ensures complete ownership and customization capabilities, making it ideal for production AI applications.