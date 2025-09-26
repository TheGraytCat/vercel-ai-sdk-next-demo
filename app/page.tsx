import Chat from "@/components/chat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 w-full justify-center items-center">
          <h1 className="text-lg font-semibold">🐱 The Gray Chat Assistant</h1>
        </div>
      </header>
      <Chat />
    </div>
  );
}
