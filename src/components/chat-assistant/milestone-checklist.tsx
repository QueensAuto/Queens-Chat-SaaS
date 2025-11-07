import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const milestones = [
  {
    phase: 'Phase 1: Discovery & Design',
    tasks: [
      'Finalize core features for MVP',
      'Design UI/UX mockups and user flow',
      'Define technical architecture and stack',
    ],
  },
  {
    phase: 'Phase 2: MVP Development',
    tasks: [
      'Setup project structure and CI/CD pipeline',
      'Develop front-end widget components',
      'Implement backend services and AI integration',
      'Build database schema and data persistence layers',
    ],
  },
  {
    phase: 'Phase 3: Testing & QA',
    tasks: [
      'Write unit and integration tests',
      'Conduct end-to-end testing of user flows',
      'Perform security and performance testing',
    ],
  },
  {
    phase: 'Phase 4: Launch & Iteration',
    tasks: [
      'Deploy to production environment',
      'Monitor application performance and user feedback',
      'Plan for v2 features based on roadmap',
    ],
  },
];

export function MilestoneChecklist() {
  return (
    <div className="space-y-4">
       <p className="text-sm text-muted-foreground">
        A detailed milestone checklist for the chat widget's development.
      </p>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {milestones.map((milestone, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-sm font-medium">{milestone.phase}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pl-2">
                {milestone.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center space-x-3">
                    <Checkbox id={`task-${index}-${taskIndex}`} />
                    <Label htmlFor={`task-${index}-${taskIndex}`} className="text-sm font-normal text-foreground/80">
                      {task}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
