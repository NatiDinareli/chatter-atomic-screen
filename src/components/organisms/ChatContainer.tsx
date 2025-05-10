
import React, { useState } from 'react';
import ChatHistory from '../molecules/ChatHistory';
import ChatInput from '../atoms/ChatInput';
import type { ChatMessageProps } from '../atoms/ChatMessage';
import { useToast } from '@/components/ui/use-toast';

interface ChatContainerProps {
  initialMessages?: ChatMessageProps[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (content: string, file?: File) => {
    // Create a content message based on what was sent
    let messageContent = content;
    
    if (file) {
      const fileType = file.type;
      
      // Create appropriate message content based on file type
      if (fileType.startsWith('audio/')) {
        messageContent = content || "🎤 Enviou um áudio";
      } else {
        messageContent = content || `📎 Enviou um arquivo: ${file.name}`;
      }
    }
    
    // Add user message to chat
    const newUserMessage: ChatMessageProps = {
      content: messageContent,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    
    // Simulate AI response
    try {
      // In a real implementation, this would be an API call to your AI service
      // that would handle the file and content
      setTimeout(() => {
        let aiResponseContent = '';
        
        if (file) {
          if (file.type.startsWith('audio/')) {
            aiResponseContent = "Recebi seu áudio e analisei o conteúdo. ";
            aiResponseContent += getAIResponse(content || "áudio análise");
          } else {
            aiResponseContent = `Recebi seu arquivo "${file.name}". `;
            aiResponseContent += getAIResponse(content || "arquivo análise");
          }
        } else {
          aiResponseContent = getAIResponse(content);
        }
        
        const aiResponse: ChatMessageProps = {
          content: aiResponseContent,
          sender: 'ai',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível enviar sua mensagem. Tente novamente.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  // Simple mock AI responses
  const getAIResponse = (message: string): string => {
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes('fraude')) {
      return 'Detectamos um padrão de fraude neste caso. Recomendo verificar a documentação médica e comparar com os procedimentos faturados.';
    } else if (lowerCaseMessage.includes('risco')) {
      return 'A análise de risco indica uma probabilidade de 78% de inconsistência na documentação. Sugiro uma auditoria detalhada.';
    } else if (lowerCaseMessage.includes('procedimento') || lowerCaseMessage.includes('médico')) {
      return 'Os procedimentos registrados apresentam inconsistências com o histórico do paciente. Há múltiplos indicadores de fraude neste caso.';
    } else if (lowerCaseMessage.includes('áudio') || lowerCaseMessage.includes('audio')) {
      return 'Analisei o áudio enviado e identifiquei menções a procedimentos não documentados. Recomendo uma investigação mais aprofundada.';
    } else if (lowerCaseMessage.includes('arquivo') || lowerCaseMessage.includes('documento')) {
      return 'Analisei o documento enviado e encontrei divergências entre os procedimentos cobrados e os realizados. Sugiro verificar os códigos de faturamento.';
    } else {
      return 'Com base na análise dos dados, identifiquei possíveis anomalias que merecem verificação. Posso fornecer mais detalhes se me perguntar sobre aspectos específicos como: procedimentos, documentação, histórico médico ou nível de risco.';
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <ChatHistory messages={messages} />
      <div className="border-t p-4">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatContainer;
