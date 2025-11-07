'use client';

import { useMainContext } from './main-provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function CanvasInputSection() {
  const { canvasDocument, setCanvasDocument } = useMainContext();

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Canvas Document</CardTitle>
        <CardDescription>
          This is your technical specification. The AI will use this document to generate the assets below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-2">
          <Label htmlFor="canvas-doc" className="sr-only">Chat Widget Architecture</Label>
          <Textarea
            id="canvas-doc"
            placeholder="Paste your canvas document here..."
            value={canvasDocument}
            onChange={(e) => setCanvasDocument(e.target.value)}
            className="h-64 text-sm font-code"
          />
        </div>
      </CardContent>
    </Card>
  );
}
