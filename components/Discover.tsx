
import React, { useState } from 'react';
import { MOCK_RESTAURANTS } from '../constants';
import { MapPin, Search, Star, ArrowRight } from 'lucide-react';

const Discover: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Enter address or ZIP code..."
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <Search size={20} /> Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
        {/* Restaurant List Sidebar */}
        <div className="lg:col-span-4 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {MOCK_RESTAURANTS.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex p-4 gap-4">
                <img src={restaurant.image} className="w-24 h-24 rounded-lg object-cover" alt={restaurant.name} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{restaurant.name}</h4>
                    <div className="flex items-center gap-1 text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[10px] font-bold">{restaurant.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{restaurant.address}</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold py-1.5 px-4 rounded-md transition-colors flex items-center gap-1">
                    View Menu <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder Area */}
        <div className="lg:col-span-8 bg-slate-200 rounded-xl relative overflow-hidden shadow-inner border border-slate-300">
           {/* In a real app, integrate Leaflet or Google Maps here */}
           <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=37.7749,-122.4194&zoom=13&size=800x600&key=MOCK')] bg-cover bg-center">
             <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
             {MOCK_RESTAURANTS.map((r, i) => (
                <div 
                  key={r.id}
                  className="absolute p-2 bg-white rounded-lg shadow-xl border-2 border-blue-500 flex items-center gap-2"
                  style={{ top: `${20 + i * 20}%`, left: `${30 + i * 15}%` }}
                >
                  <div className="bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">{i + 1}</div>
                  <div className="pr-2">
                    <p className="text-[10px] font-bold whitespace-nowrap">{r.name}</p>
                  </div>
                </div>
             ))}
           </div>
           
           <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md border border-slate-200 text-xs font-medium text-slate-600">
             Showing {MOCK_RESTAURANTS.length} restaurants near you
           </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
