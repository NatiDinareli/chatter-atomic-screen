
import React from 'react';
import { 
  Sidebar, 
  SidebarContent,
} from '@/components/ui/sidebar';
import SidebarNav from '../molecules/SidebarNav';

const AppSidebar: React.FC = () => {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarNav />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
