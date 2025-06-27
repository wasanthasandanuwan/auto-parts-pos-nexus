
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShoppingCart, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Home,
  FileText,
  Truck
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: ShoppingCart, label: 'Point of Sale', path: '/pos' },
    { icon: FileText, label: 'Invoices', path: '/invoices' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Truck, label: 'Vehicles', path: '/vehicles' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {!collapsed && (
          <div>
            <h1 className="text-xl font-bold text-blue-400">AutoParts POS</h1>
            <p className="text-xs text-slate-400">Professional System</p>
          </div>
        )}
        <button
          onClick={() => onToggle(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`
                }
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-700">
          <div className="text-xs text-slate-400">
            <p>Version 1.0.0</p>
            <p>© 2024 AutoParts</p>
          </div>
        </div>
      )}
    </div>
  );
};
