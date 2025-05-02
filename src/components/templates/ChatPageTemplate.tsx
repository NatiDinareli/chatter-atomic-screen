
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '../organisms/AppSidebar';
import ChatContainer from '../organisms/ChatContainer';
import CaseInfoPanel from '../molecules/CaseInfoPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, LogOut, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ChatPageTemplate: React.FC = () => {
  const navigate = useNavigate();
  
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

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1">
        <header className="border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <SidebarTrigger />
              <div className="ml-4 font-medium">Echo AI - Assistente de Análise</div>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">Usuário</p>
                      <p className="text-sm text-muted-foreground">usuario@nuvtech.com</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer flex items-center gap-2 text-destructive focus:text-destructive" 
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
