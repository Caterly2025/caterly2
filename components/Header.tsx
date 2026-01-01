
import React from 'react';
import { UserRole } from '../types';
import { LayoutGrid, Users, Bell, Search, Settings, LogOut, ChevronDown } from 'lucide-react';

interface HeaderProps {
  role: UserRole;
  setRole: (role: UserRole) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ role, setRole, activeTab, setActiveTab }) => {
  return (
    <div className="bg-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold tracking-tight italic">Caterly</h1>
          
          <div className="flex items-center bg-[#334155] rounded-lg p-1">
            <button
              onClick={() => setRole(UserRole.CUSTOMER)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                role === UserRole.CUSTOMER ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Users size={16} /> Customer
            </button>
            <button
              onClick={() => setRole(UserRole.OWNER)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                role === UserRole.OWNER ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-300 hover:text-white'
              }`}
            >
              <LayoutGrid size={16} /> Owner
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-[#334155] px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-slate-300">Live Updates</span>
          </div>
          <Bell className="text-slate-300 hover:text-white cursor-pointer" size={20} />
          <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
            <img 
              src="https://picsum.photos/seed/user1/40/40" 
              className="w-8 h-8 rounded-full border-2 border-slate-600" 
              alt="User" 
            />
            <span className="text-sm font-medium text-slate-200">Sarah Jenkins</span>
            <LogOut className="text-slate-400 hover:text-white cursor-pointer ml-2" size={18} />
          </div>
        </div>
      </div>

      <div className="bg-[#1e293b] border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex gap-8">
            {['Discover', 'My Orders', 'Invoices'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-blue-500 text-white' 
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
