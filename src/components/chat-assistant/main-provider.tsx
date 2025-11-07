'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

const initialCanvasDoc = `
## Project: AI-Powered Chat Widget

### 1. Overview
This document outlines the technical architecture for an AI-powered chat widget. The widget will be embeddable on any website and provide intelligent, automated customer support by leveraging a powerful language model. It will handle user queries, provide information, and escalate to human agents when necessary.

### 2. Core Features
- **Real-time Conversation:** Engage users with natural, real-time responses.
- **Knowledge Base Integration:** Fetches answers from a connected knowledge base.
- **Conversation History:** Stores chat history for each user.
- **User Authentication:** Simple session-based user identification.
- **Webhook Support:** Sends conversation events to a specified backend endpoint.
- **Escalation:** Allows users to request speaking with a human agent.

### 3. Data Model
- **User:** (user_id, session_id, created_at)
- **Conversation:** (conversation_id, user_id, start_time, end_time, status)
- **Message:** (message_id, conversation_id, sender_type, content, timestamp)
- **WebhookEvent:** (event_id, event_type, payload, created_at)

### 4. Technology Stack
- **Frontend:** React.js (Next.js)
- **Backend:** Node.js (Express)
- **Database:** PostgreSQL
- **AI Model:** Gemini
`;


type MainContextType = {
  canvasDocument: string;
  setCanvasDocument: (doc: string) => void;
};

const MainContext = createContext<MainContextType | undefined>(undefined);

export function MainProvider({ children }: { children: ReactNode }) {
  const [canvasDocument, setCanvasDocument] = useState<string>(initialCanvasDoc.trim());

  return (
    <MainContext.Provider value={{ canvasDocument, setCanvasDocument }}>
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
}
