
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '../organisms/AppSidebar';
import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const SettingsPageTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1">
        <header className="border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <SidebarTrigger />
              <div className="ml-4 font-medium">Configurações</div>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <main className="container py-6">
          <h1 className="text-2xl font-semibold mb-6">Configurações do Sistema</h1>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferências do Usuário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Configure suas preferências de usuário e perfil.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Configurações da Aplicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ajuste as configurações gerais da aplicação.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notificações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gerencie suas preferências de notificações.</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPageTemplate;
