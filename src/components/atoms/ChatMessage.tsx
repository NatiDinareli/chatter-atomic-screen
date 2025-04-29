
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';

export interface ChatMessageProps {
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, sender, timestamp }) => {
  const isUser = sender === 'user';
  
  return (
    <div className={cn(
      "flex w-full gap-3 mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="h-8 w-8 bg-primary">
          <span className="text-xs text-white">AI</span>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[80%] rounded-lg p-3",
        isUser 
          ? "bg-primary text-white rounded-tr-none" 
          : "bg-secondary text-secondary-foreground rounded-tl-none"
      )}>
        <p className="text-sm">{content}</p>
        <div className="mt-1 text-[10px] opacity-70 text-right">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 bg-muted">
          <span className="text-xs">Você</span>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
