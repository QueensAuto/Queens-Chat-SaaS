'use client'

import { ArrowRight } from "lucide-react"

const actors = ["Client", "Backend Server", "Third-Party API"]

const steps = [
  { from: "Client", to: "Backend Server", label: "1. User sends message" },
  { from: "Backend Server", to: "Client", label: "2. Acknowledge receipt" },
  { from: "Backend Server", to: "Third-Party API", label: "3. Process and call webhook" },
  { from: "Third-Party API", to: "Backend Server", label: "4. Webhook response" },
]

export function WebhookFlow() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        A sequence diagram illustrating the flow of webhooks.
      </p>
      <div className="p-4 bg-muted/50 rounded-lg overflow-x-auto h-[280px] flex flex-col">
        <div className="flex justify-between min-w-[500px] relative">
          {actors.map(actor => (
            <div key={actor} className="flex flex-col items-center w-1/3 z-10">
              <div className="font-semibold text-sm mb-2 bg-muted/50 px-2 rounded">{actor}</div>
              <div className="w-0.5 h-64 bg-border/70"></div>
            </div>
          ))}
          <div className="absolute top-10 left-0 right-0 h-64 min-w-[500px]">
            {steps.map((step, index) => {
              const fromIndex = actors.indexOf(step.from)
              const toIndex = actors.indexOf(step.to)
              const isForward = fromIndex < toIndex
              const left = isForward ? `${fromIndex * 33.3 + 5}%` : `${toIndex * 33.3 + 5}%`
              const width = `${Math.abs(fromIndex - toIndex) * 33.3 - 10}%`

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{ top: `${index * 25}%`, left, width }}
                >
                  <div className="flex items-center text-xs text-muted-foreground">
                    {!isForward && <ArrowRight className="transform rotate-180 mr-1 h-3 w-3 text-primary" />}
                    <div className="flex-1 border-t-2 border-dashed border-primary/50 relative">
                       <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-muted/50 px-1">{step.label}</span>
                    </div>
                    {isForward && <ArrowRight className="ml-1 h-3 w-3 text-primary" />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
