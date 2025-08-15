import ChatGenerate from '@/components/chat-generate';

export default function GeneratePage() {
  return (
    <main className="h-screen overflow-hidden">
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
        <div className="container flex h-14 items-center">
          <h1 className="text-xl font-semibold">AI Chat (Non-Streaming)</h1>
        </div>
      </header>
      <ChatGenerate />
    </main>
  );
}