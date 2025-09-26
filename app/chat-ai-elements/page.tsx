import ChatAIElements from "@/components/chat-ai-elements";

export default function ChatAIElementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative border-b bg-gradient-to-r from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10"></div>
        <div className="relative flex h-16 w-full justify-center items-center px-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🐱</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-gray-100 dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                The Gray Chat Assistant
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">
                AI Elements • Powered by Claude
              </p>
            </div>
          </div>
        </div>
      </header>
      <ChatAIElements />
    </div>
  );
}