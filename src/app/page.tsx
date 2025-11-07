import { Header } from '@/components/chat-assistant/header';
import { CanvasInputSection } from '@/components/chat-assistant/canvas-input-section';
import { FeatureGrid } from '@/components/chat-assistant/feature-grid';
import { MainProvider } from '@/components/chat-assistant/main-provider';

export default function Home() {
  return (
    <MainProvider>
      <div className="min-h-screen bg-background text-foreground font-body">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-8">
          <CanvasInputSection />
          <FeatureGrid />
        </main>
        <footer className="text-center py-4 text-sm text-muted-foreground">
          <p>Powered by Gemini</p>
        </footer>
      </div>
    </MainProvider>
  );
}
