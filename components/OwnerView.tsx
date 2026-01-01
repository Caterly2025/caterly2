
import React, { useState } from 'react';
import { Plus, LayoutDashboard, Utensils, FilePlus, Users, Sparkles } from 'lucide-react';
import { getSmartMenuSuggestions } from '../services/geminiService';

const OwnerView: React.FC = () => {
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any[] | null>(null);

  const handleAiHelp = async () => {
    setIsLoadingAi(true);
    const data = await getSmartMenuSuggestions("Modern American", "Corporate Gala");
    setAiSuggestions(data);
    setIsLoadingAi(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Owner Dashboard</h2>
          <p className="text-slate-500">Manage your restaurant and catering operations</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
            <Plus size={20} /> Onboard Restaurant
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Orders', value: '12', icon: LayoutDashboard, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Total Sales', value: '$45,210', icon: Utensils, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Unpaid Invoices', value: '5', icon: FilePlus, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Happy Clients', value: '284', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`${stat.bg} ${stat.color} p-3 rounded-lg`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Incoming Orders</h3>
            <button className="text-sm text-blue-600 font-bold hover:underline">View All</button>
          </div>
          <div className="p-6">
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                     <tr className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-4">
                        <th className="pb-4">Order ID</th>
                        <th className="pb-4">Client</th>
                        <th className="pb-4">Items</th>
                        <th className="pb-4">Total</th>
                        <th className="pb-4">Action</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                      {[1, 2, 3].map(i => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                           <td className="py-4 font-medium text-slate-700">#ORD-00{i}</td>
                           <td className="py-4">
                              <p className="text-sm font-bold text-slate-900">Alice Smith</p>
                              <p className="text-[10px] text-slate-500">Corporate Lunch</p>
                           </td>
                           <td className="py-4 text-sm text-slate-600">8 items</td>
                           <td className="py-4 font-bold text-slate-900">$240.00</td>
                           <td className="py-4">
                              <button className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 px-3 py-1 rounded text-xs font-bold transition-all">
                                Process
                              </button>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-xl shadow-xl p-8 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles size={120} />
           </div>
           <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
             <Sparkles className="text-yellow-400" /> AI Menu Assistant
           </h3>
           <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
             Need inspiration for your next catering package? Let Gemini AI suggest a winning menu based on current food trends.
           </p>
           
           {!aiSuggestions ? (
              <button 
                onClick={handleAiHelp}
                disabled={isLoadingAi}
                className="w-full bg-white text-indigo-900 font-bold py-3 rounded-lg shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isLoadingAi ? 'Generating suggestions...' : 'Get AI Suggestions'}
              </button>
           ) : (
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {aiSuggestions.map((item, idx) => (
                   <div key={idx} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                      <p className="font-bold text-yellow-300 text-xs">{item.itemName}</p>
                      <p className="text-[10px] text-white/80 mt-1">{item.description}</p>
                      <p className="text-[9px] text-white/50 mt-1 italic">{item.portionSize}</p>
                   </div>
                ))}
                <button onClick={() => setAiSuggestions(null)} className="w-full text-xs text-indigo-200 mt-4 hover:text-white transition-colors">Reset Suggestions</button>
              </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default OwnerView;
