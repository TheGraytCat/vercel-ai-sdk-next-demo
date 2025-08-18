# Vercel AI SDK Demo - The Gray Cat Chat

A comprehensive demonstration of building AI-powered chat interfaces using the Vercel AI SDK, featuring multiple implementation patterns and modern AI components. Created for The Gray Cat YouTube channel.

## 🎬 Overview

This project showcases how easy it is to build sophisticated AI chat applications using modern tools. It demonstrates three different chat implementations, each highlighting different capabilities of the Vercel AI SDK and various AI providers.

## ✨ Features

### 1. **Streaming Chat with Google Gemini** (`/`)
- Real-time streaming responses powered by Google's Gemini 2.5 Flash model
- Chat with "The Gray Cat" - a friendly, pun-loving British Shorthair AI assistant
- Built using the Vercel AI SDK's `useChat` hook with streaming transport
- Custom system prompt creating a unique personality

### 2. **Auto-Completion with OpenAI GPT-4o-mini** (`/`)
- Smart text completion suggestions as you type
- Powered by OpenAI's GPT-4o-mini model
- British Shorthair cat-themed suggestions
- Press Tab to accept suggestions
- Debounced completion requests for optimal performance

### 3. **Non-Streaming Chat** (`/generate`)
- Traditional request-response chat pattern
- Uses Google Gemini 2.5 Flash with `generateText`
- Complete message generation before display
- Ideal for use cases requiring full response validation

### 4. **AI Elements Chat Interface** (`/chat-ai-elements`)
- Modern UI components from Vercel's AI Elements library
- Built on top of shadcn/ui
- Professional chat interface with:
  - Auto-scrolling conversation view
  - Message avatars and formatting
  - Loading indicators
  - Responsive design
  - Accessibility features

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + AI Elements
- **AI Providers**: 
  - Google Gemini (gemini-2.5-flash)
  - OpenAI (gpt-4o-mini)
- **AI SDK**: Vercel AI SDK v5

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- API keys for:
  - Google AI Studio (for Gemini)
  - OpenAI (for completions)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vercel-ai-sdk-demo.git
cd vercel-ai-sdk-demo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create a .env.local file in the root directory
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
OPENAI_API_KEY=your_openai_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/          # Streaming chat endpoint (Gemini)
│   │   ├── completion/    # Auto-completion endpoint (OpenAI)
│   │   └── generate/      # Non-streaming chat endpoint (Gemini)
│   ├── chat-ai-elements/  # AI Elements demo page
│   ├── generate/          # Non-streaming chat page
│   └── page.tsx          # Main chat page with completions
├── components/
│   ├── ai-elements/      # AI Elements components
│   ├── ui/              # shadcn/ui components
│   ├── chat.tsx         # Main chat component
│   ├── chat-generate.tsx # Non-streaming chat component
│   └── chat-ai-elements.tsx # AI Elements chat component
└── lib/
    └── prompts/
        └── system.txt    # The Gray Cat system prompt
```

## 🎯 Key Implementation Details

### Streaming Chat
- Uses `streamText` from Vercel AI SDK
- `DefaultChatTransport` for WebSocket-like streaming
- Real-time token-by-token response display

### Auto-Completion
- Debounced requests (300ms) to reduce API calls
- Triggers on input changes > 3 characters
- Tab key binding for accepting suggestions
- Visual suggestion preview with opacity

### AI Elements Integration
- Pre-built components for rapid development
- Components added directly to codebase (not as dependency)
- Full customization control
- Consistent design patterns

## 🎨 The Gray Cat Personality

The AI assistant identifies as "The Gray Cat" - a chunky, friendly British Shorthair with:
- Gray/cat pronouns
- Love for cat puns and wordplay
- Expert knowledge in all things feline
- Casual, friendly communication style
- Cat emoji usage in responses

## 📚 Learn More

- [Vercel AI SDK Documentation](https://sdk.vercel.ai)
- [AI Elements Documentation](https://ai-sdk.dev/elements/overview)
- [Google AI Studio](https://aistudio.google.com)
- [OpenAI Platform](https://platform.openai.com)
- [shadcn/ui](https://ui.shadcn.com)

## 🎥 Video Tutorial

Watch the full tutorial on [The Gray Cat YouTube Channel](https://youtube.com/@TheGrayCat) where we build this project step-by-step.

## 📝 License

MIT License - feel free to use this project for learning and development!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👤 Author

Created by **The Gray Cat** for educational purposes.

---

*Built with 🐾 by The Gray Cat*