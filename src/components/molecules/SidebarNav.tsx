
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, ShieldAlert, Settings } from 'lucide-react';
import NavItem from '../atoms/NavItem';
import Logo from '../atoms/Logo';

const SidebarNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: <LineChart className="h-4 w-4" />,
      label: "Echo AI",
      href: "/",
      variant: "secondary"
    },
    {
      icon: <ShieldAlert className="h-4 w-4" />,
      label: "Antifraude",
      href: "/chat",
      variant: "primary"
    },
    {
      icon: <Settings className="h-4 w-4" />,
      label: "Configurações",
      href: "/settings",
      variant: "secondary"
    }
  ];

  return (
    <div className="space-y-4 py-4">
      <div className="px-4 py-2 flex items-center gap-2">
        <div className="bg-primary/10 w-6 h-6 flex items-center justify-center rounded-md">
          <span className="text-primary text-lg">E</span>
        </div>
        <Logo />
      </div>
      <div className="px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const isPrimary = item.variant === "primary";
          
          return (
            <NavItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={isActive}
              className={isPrimary ? "bg-primary/15 text-primary hover:bg-primary/20" : ""}
            />
          );
        })}
      </div>
      
      <div className="absolute bottom-4 px-4 w-full">
        <div className="text-xs text-muted-foreground">NUVTECH</div>
      </div>
    </div>
  );
};

export default SidebarNav;
