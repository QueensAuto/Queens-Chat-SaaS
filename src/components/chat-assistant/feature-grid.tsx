import { ExecutiveSummary } from './executive-summary';
import { MilestoneChecklist } from './milestone-checklist';
import { DatabaseSchema } from './database-schema';
import { WebhookFlow } from './webhook-flow';
import { Roadmap } from './roadmap';
import { FeatureCard } from './feature-card';
import { FileText, ListChecks, Database, Webhook, Map as MapIcon } from 'lucide-react';

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <FeatureCard title="Executive Summary" icon={<FileText className="h-6 w-6" />}>
        <ExecutiveSummary />
      </FeatureCard>

      <FeatureCard title="Milestone Checklist" icon={<ListChecks className="h-6 w-6" />}>
        <MilestoneChecklist />
      </FeatureCard>

      <FeatureCard title="Database Schema" icon={<Database className="h-6 w-6" />}>
        <DatabaseSchema />
      </FeatureCard>
      
      <FeatureCard title="Webhook Sequence Diagram" icon={<Webhook className="h-6 w-6" />}>
        <WebhookFlow />
      </FeatureCard>
      
      <div className="md:col-span-2">
        <FeatureCard title="Product Roadmap: MVP → v3" icon={<MapIcon className="h-6 w-6" />}>
          <Roadmap />
        </FeatureCard>
      </div>
    </div>
  );
}
