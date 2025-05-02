
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
    <div className="h-screen flex bg-slate-50">
      {/* Left side - Images and illustrations */}
      <div className="hidden lg:flex lg:w-1/2 flex-col bg-gradient-to-br from-primary/5 to-primary/10 p-12 justify-center items-center">
        <div className="space-y-8 max-w-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">EchoAI Antifraude</h2>
            <p className="text-muted-foreground">Análise inteligente para detecção de fraudes</p>
          </div>
          
          {/* Main illustration */}
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <img 
              src="/placeholder.svg" 
              alt="Análise de dados" 
              className="w-full h-64 object-cover rounded mb-4"
            />
            <div className="flex gap-2 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                <p className="text-sm">Como posso ajudar com a análise deste caso?</p>
              </div>
            </div>
            <div className="flex gap-2 items-start mt-3 justify-end">
              <div className="bg-primary/10 p-3 rounded-lg rounded-tr-none">
                <p className="text-sm">Identifiquei padrões suspeitos nas transações recentes. Veja o relatório.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              </div>
              <h3 className="font-medium">Detecção avançada</h3>
              <p className="text-xs text-muted-foreground mt-1">Encontre padrões ocultos com IA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
              </div>
              <h3 className="font-medium">Relatórios detalhados</h3>
              <p className="text-xs text-muted-foreground mt-1">Visualizações claras e acionáveis</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
              <div className="bg-primary/10 w-8 h-8 flex items-center justify-center rounded-md">
                <span className="text-primary text-xl font-bold">E</span>
              </div>
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground">Plataforma de Análise Antifraude</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Login</CardTitle>
              <CardDescription className="text-center">
                Entre com suas credenciais para acessar a plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
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
            <CardFooter className="flex-col space-y-4">
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
