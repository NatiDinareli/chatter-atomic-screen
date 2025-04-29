
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '../organisms/AppSidebar';
import ChatContainer from '../organisms/ChatContainer';
import CaseInfoPanel from '../molecules/CaseInfoPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChatPageTemplate: React.FC = () => {
  // Mock data
  const caseInfo = {
    id: 'CASE-2024-0215',
    riskScore: 78,
    date: '30 jan 2024',
    type: 'Inconsistências Médicas'
  };

  // Initial messages for the chat
  const initialMessages = [
    {
      content: "Olá! Eu sou o assistente de análise antifraude. Como posso ajudar você com este caso?",
      sender: 'ai' as const,
      timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
    }
  ];

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1">
        <header className="border-b">
          <div className="flex items-center h-16 px-4">
            <SidebarTrigger />
            <div className="ml-4 font-medium">Echo AI - Assistente de Análise</div>
          </div>
        </header>
        <main className="container py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-6">Assistente de Análise</h1>
            <CaseInfoPanel
              caseId={caseInfo.id}
              riskScore={caseInfo.riskScore}
              date={caseInfo.date}
              type={caseInfo.type}
            />
          </div>
          
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle>Chat de Análise</CardTitle>
            </CardHeader>
            <CardContent>
              <ChatContainer initialMessages={initialMessages} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ChatPageTemplate;
