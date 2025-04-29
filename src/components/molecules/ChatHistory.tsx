
import React, { useRef, useEffect } from 'react';
import ChatMessage, { ChatMessageProps } from '../atoms/ChatMessage';

interface ChatHistoryProps {
  messages: ChatMessageProps[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          content={message.content}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
