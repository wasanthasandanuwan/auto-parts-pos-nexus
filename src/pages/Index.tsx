
import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { POSInterface } from '@/components/pos/POSInterface';

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar collapsed={sidebarCollapsed} onToggle={setSidebarCollapsed} />
      
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-6">
          <POSInterface />
        </main>
      </div>
    </div>
  );
};

export default Index;
