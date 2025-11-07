'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useMainContext } from './main-provider';
import { createDatabaseSchemaDiagram } from '@/ai/flows/create-database-schema-diagram';
import { Button } from '@/components/ui/button';
import { Wand2, Download } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function DatabaseSchema() {
  const { canvasDocument } = useMainContext();
  const [diagramUrl, setDiagramUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setDiagramUrl('');
    try {
      const result = await createDatabaseSchemaDiagram({ canvasDocument });
      setDiagramUrl(result.diagramDataUri);
    } catch (error) {
      console.error('Error generating database schema:', error);
      setDiagramUrl('');
    }
    setIsLoading(false);
  };

  const handleDownload = () => {
    if (!diagramUrl) return;
    const a = document.createElement('a');
    a.href = diagramUrl;
    a.download = 'database-schema.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  return (
    <div className="space-y-4 flex-grow flex flex-col">
      <p className="text-sm text-muted-foreground">
        Create a visual database schema diagram from the canvas document.
      </p>
      <div className="flex-grow min-h-[200px] flex items-center justify-center bg-muted/50 rounded-md p-4">
        {isLoading ? (
          <Skeleton className="w-full h-48" />
        ) : diagramUrl ? (
          <Image
            src={diagramUrl}
            alt="Database Schema Diagram"
            width={500}
            height={300}
            className="object-contain rounded-md"
          />
        ) : (
          <div className="text-sm text-center text-muted-foreground">
            Click generate to create the diagram.
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <Button onClick={handleGenerate} disabled={isLoading || !canvasDocument} className="flex-1">
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? 'Generating...' : 'Generate'}
        </Button>
        <Button variant="outline" onClick={handleDownload} disabled={!diagramUrl}>
           <Download className="mr-2 h-4 w-4" />
           Download
        </Button>
      </div>
    </div>
  );
}
