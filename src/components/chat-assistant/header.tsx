import { BotMessageSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center gap-4">
        <BotMessageSquare className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold tracking-tight font-headline">
          Chat Widget Assistant
        </h1>
      </div>
    </header>
  );
}
