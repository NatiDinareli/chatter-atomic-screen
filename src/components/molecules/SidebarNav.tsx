
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, LineChart } from 'lucide-react';
import NavItem from '../atoms/NavItem';
import Logo from '../atoms/Logo';

const SidebarNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: <LineChart className="h-4 w-4" />,
      label: "Antifraude",
      href: "/",
    },
    {
      icon: <Bot className="h-4 w-4" />,
      label: "Chat AI",
      href: "/chat",
    }
  ];

  return (
    <div className="space-y-4 py-4">
      <div className="px-4 py-2">
        <Logo />
      </div>
      <div className="px-3">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={location.pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
