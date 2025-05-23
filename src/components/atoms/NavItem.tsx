
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  href,
  isActive = false,
  className,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-muted-foreground hover:bg-accent",
        className
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
