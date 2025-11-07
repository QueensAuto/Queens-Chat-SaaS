import type { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type FeatureCardProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

export function FeatureCard({ title, icon, children }: FeatureCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-4">
        <div className="bg-primary/20 text-primary p-3 rounded-lg">
          {icon}
        </div>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col pt-0">
        {children}
      </CardContent>
    </Card>
  );
}
