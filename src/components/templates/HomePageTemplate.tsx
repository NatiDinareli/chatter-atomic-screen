
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '../organisms/AppSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, FileText } from 'lucide-react';

const HomePageTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1">
        <header className="border-b">
          <div className="flex items-center h-16 px-4">
            <SidebarTrigger />
            <div className="ml-4 font-medium">Echo - Antifraude</div>
          </div>
        </header>
        <main className="container py-6">
          <h1 className="text-2xl font-semibold mb-6">Visão Geral</h1>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Casos Analisados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">215</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Casos com Risco de Fraude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">215</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Período analisado</CardTitle>
                <Clock className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">15 jan - 30 jan</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Próxima análise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">14 de fevereiro</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Anomalias de Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Identifica outliers com transações acima da média</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Casos: 30</span>
                  <Link to="/chat">
                    <Button variant="outline" size="sm">
                      Analisar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Inconsistências na Documentação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Verifica a documentação de médicos e prestadores de serviço</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Casos: 20</span>
                  <Link to="/chat">
                    <Button variant="outline" size="sm">
                      Analisar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Inconsistências em Procedimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Analisa procedimentos em busca de inconsistências médicas</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Casos: 50</span>
                  <Link to="/chat">
                    <Button variant="outline" size="sm">
                      Analisar <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Casos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 p-4 text-sm font-medium text-muted-foreground border-b">
                  <div>ID</div>
                  <div>Prestador</div>
                  <div>Beneficiário</div>
                  <div>Tipo</div>
                  <div>Nível de Risco</div>
                  <div></div>
                </div>
                
                {[1, 2, 3].map((item) => (
                  <div key={item} className="grid grid-cols-6 p-4 text-sm items-center">
                    <div>CASE-2024-{item.toString().padStart(4, '0')}</div>
                    <div>Dr. Silva</div>
                    <div>João Pereira</div>
                    <div>Procedimento</div>
                    <div className="text-destructive">Alto</div>
                    <div>
                      <Link to="/chat">
                        <Button variant="ghost" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default HomePageTemplate;
