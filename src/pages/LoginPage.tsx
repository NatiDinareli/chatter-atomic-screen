
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/atoms/Logo';

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: { email: string; password: string }) => {
    // In a real app, we would verify credentials on the server
    // For now, we'll just simulate a successful login
    toast({
      title: "Login realizado",
      description: "Bem-vindo à plataforma NuvTech.",
    });
    
    // Navigate to the antifraude page
    setTimeout(() => navigate('/'), 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Images and chat examples */}
      <div className="w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-3">EchoAI Antifraude</h1>
            <p className="text-lg text-muted-foreground">Inteligência artificial para detecção e prevenção de fraudes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chat illustration */}
            <div className="bg-white rounded-lg shadow-lg p-5 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AI</span>
                </div>
                <div>
                  <h3 className="font-bold">Análise Inteligente</h3>
                  <p className="text-sm text-muted-foreground">Conversas contextuais</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-2 items-start">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg rounded-tl-none text-sm">
                    Detectei uma transação suspeita. Pode analisar?
                  </div>
                </div>
                <div className="flex gap-2 items-start justify-end">
                  <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none text-sm">
                    Analisei o padrão transacional e identifiquei 3 indicadores de fraude. Recomendo bloqueio preventivo.
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics illustration */}
            <div className="bg-white rounded-lg shadow-lg p-5 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold">Visualização de Dados</h3>
                  <p className="text-sm text-muted-foreground">Gráficos intuitivos</p>
                </div>
              </div>
              <div className="h-40 bg-muted/50 rounded-md flex items-center justify-center mb-2">
                <div className="w-full px-6 flex items-end h-32 gap-3">
                  <div className="w-1/5 bg-primary/20 h-20 rounded-t-md"></div>
                  <div className="w-1/5 bg-primary/40 h-16 rounded-t-md"></div>
                  <div className="w-1/5 bg-primary/60 h-28 rounded-t-md"></div>
                  <div className="w-1/5 bg-primary/80 h-12 rounded-t-md"></div>
                  <div className="w-1/5 bg-primary h-24 rounded-t-md"></div>
                </div>
              </div>
              <p className="text-sm text-center text-muted-foreground">Detecção de anomalias em tempo real</p>
            </div>
            
            {/* Feature highlights */}
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                </div>
                <h3 className="font-medium">Detecção avançada</h3>
                <p className="text-xs text-muted-foreground mt-1">Encontre padrões ocultos com IA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                </div>
                <h3 className="font-medium">Proteção contínua</h3>
                <p className="text-xs text-muted-foreground mt-1">Monitoramento 24/7</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <h3 className="font-medium">Fácil integração</h3>
                <p className="text-xs text-muted-foreground mt-1">Compatível com sistemas existentes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                </div>
                <h3 className="font-medium">Relatórios detalhados</h3>
                <p className="text-xs text-muted-foreground mt-1">Insights claros e acionáveis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form (positioned against right edge) */}
      <div className="w-full max-w-md flex items-center justify-center bg-white shadow-2xl">
        <div className="w-full max-w-sm px-8 py-12">
          <div className="mb-8 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="bg-primary/10 w-8 h-8 flex items-center justify-center rounded-md">
                <span className="text-primary text-xl font-bold">E</span>
              </div>
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">Plataforma de Análise Antifraude</p>
          </div>

          <Card className="border-none shadow-none">
            <CardHeader className="px-0">
              <CardTitle className="text-2xl text-center">Login</CardTitle>
              <CardDescription className="text-center">
                Entre com suas credenciais para acessar a plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="email">Email</Label>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              id="email" 
                              placeholder="seu.email@exemplo.com" 
                              type="email"
                              className="pl-10" 
                              required
                              {...field}
                            />
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="password">Senha</Label>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              id="password" 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Sua senha" 
                              className="pl-10 pr-10"
                              required
                              {...field}
                            />
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <button 
                              type="button" 
                              onClick={togglePasswordVisibility} 
                              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? 
                                <EyeOff className="h-4 w-4" /> : 
                                <Eye className="h-4 w-4" />
                              }
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-end">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Esqueceu sua senha?
                    </a>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Entrar
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex-col space-y-4 px-0">
              <div className="text-xs text-center text-muted-foreground w-full">
                © 2024 NUVTECH. Todos os direitos reservados.
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
