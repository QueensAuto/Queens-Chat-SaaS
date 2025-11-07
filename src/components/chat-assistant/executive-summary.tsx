'use client';

import { useState } from 'react';
import { useMainContext } from './main-provider';
import { generateExecutiveSummary } from '@/ai/flows/generate-executive-summary';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function ExecutiveSummary() {
  const { canvasDocument } = useMainContext();
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateExecutiveSummary({ canvasDocument });
      setSummary(result.executiveSummary);
    } catch (error) {
      console.error('Error generating executive summary:', error);
      setSummary('Failed to generate summary. Please check the console for errors.');
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4 flex-grow flex flex-col">
      <p className="text-sm text-muted-foreground">
        Generate a one-page executive summary of the chat widget architecture.
      </p>
      <div className="flex-grow text-sm space-y-2 rounded-lg bg-muted/30 p-4 min-h-[150px]">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : summary ? (
          <div className="whitespace-pre-wrap">{summary}</div>
        ) : (
          <div className="text-sm text-center text-muted-foreground h-full flex items-center justify-center">
            Click generate to create the summary.
          </div>
        )}
      </div>
      <Button onClick={handleGenerate} disabled={isLoading || !canvasDocument}>
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? 'Generating...' : 'Generate'}
      </Button>
    </div>
  );
}
