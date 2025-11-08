
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { WidgetTheme } from '@/app/admin/theming/[widgetId]/page';
import { defaultTheme, darkTheme, playfulTheme } from '@/lib/themes';

interface ThemeSidebarProps {
  setTheme: (theme: WidgetTheme) => void;
}

export function ThemeSidebar({ setTheme }: ThemeSidebarProps) {
  return (
    <div className="flex h-full flex-col p-4 bg-background">
      <div className="mb-4">
        <Button className="w-full">Create New Theme</Button>
      </div>
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>My Themes</CardTitle>
          <CardDescription>Select a theme to edit or preview.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh]">
            <div className="space-y-2">
                 {/* Placeholder for theme list */}
                <Button variant="ghost" className="w-full justify-start" onClick={() => setTheme(defaultTheme)}>Default Theme</Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => setTheme(darkTheme)}>Dark Mode</Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => setTheme(playfulTheme)}>Playful</Button>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
       <div className="mt-auto pt-4">
          <Button className="w-full" variant="outline">Publish Theme</Button>
        </div>
    </div>
  );
}
