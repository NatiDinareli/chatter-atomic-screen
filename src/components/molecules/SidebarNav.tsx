
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
      href: "/chat",
      variant: "secondary"
    },
    {
      icon: <ShieldAlert className="h-4 w-4" />,
      label: "Antifraude",
      href: "/",
      variant: "primary"
    }
  ];

  // Settings navigation item separated to place at the bottom
  const settingsItem = {
    icon: <Settings className="h-4 w-4" />,
    label: "Configurações",
    href: "/settings",
    variant: "secondary"
  };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
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
      
      {/* This spacer pushes the content below it to the bottom */}
      <div className="flex-grow"></div>
      
      {/* Settings at the bottom */}
      <div className="px-3 mb-4">
        <NavItem
          icon={settingsItem.icon}
          label={settingsItem.label}
          href={settingsItem.href}
          isActive={location.pathname === settingsItem.href}
          className={settingsItem.variant === "primary" ? "bg-primary/15 text-primary hover:bg-primary/20" : ""}
        />
      </div>
      
      {/* Centered NUVTECH text at the bottom */}
      <div className="px-4 w-full text-center">
        <div className="text-xs text-muted-foreground">NUVTECH</div>
      </div>
    </div>
  );
};

export default SidebarNav;
