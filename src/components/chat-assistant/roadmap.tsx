import { Badge } from "@/components/ui/badge"

const roadmapData = {
  mvp: {
    title: "MVP",
    features: ["Real-time Conversation", "Knowledge Base Integration", "Conversation History"],
  },
  v2: {
    title: "Version 2",
    features: ["User Authentication", "Webhook Support", "Basic Analytics Dashboard"],
  },
  v3: {
    title: "Version 3",
    features: ["Human Agent Escalation", "Multi-language Support", "Customizable UI Themes"],
  },
}

export function Roadmap() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        A product roadmap outlining the development stages: MVP, v2, and v3.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.values(roadmapData).map((version) => (
          <div key={version.title} className="p-4 border rounded-lg bg-background">
            <h3 className="font-bold text-md mb-3">{version.title}</h3>
            <ul className="space-y-2">
              {version.features.map((feature) => (
                <li key={feature} className="text-sm text-foreground/90">
                  <Badge variant="secondary" className="font-normal">{feature}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
