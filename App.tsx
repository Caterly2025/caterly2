
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Discover from './components/Discover';
import OwnerView from './components/OwnerView';
import { UserRole } from './types';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.CUSTOMER);
  const [activeTab, setActiveTab] = useState('Discover');

  const renderCustomerContent = () => {
    switch (activeTab) {
      case 'Discover':
        return <Discover />;
      case 'My Orders':
        return <Dashboard />;
      case 'Invoices':
        return <Dashboard />; // Simplification for demo
      default:
        return <Discover />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header 
        role={role} 
        setRole={setRole} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        {role === UserRole.CUSTOMER ? (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {activeTab === 'Discover' ? 'Find Your Perfect Caterer' : 'Your Catering Dashboard'}
            </h2>
            {renderCustomerContent()}
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <OwnerView />
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2024 Caterly Inc. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default App;
