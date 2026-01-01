
import React from 'react';
import { Order, OrderStatus, Invoice } from '../types';
import { CURRENT_ORDER, PAST_ORDERS, INVOICES } from '../constants';
import { CheckCircle2, Clock, Circle, MapPin, ChevronRight, FileText } from 'lucide-react';

const StatusTimeline: React.FC<{ status: OrderStatus }> = ({ status }) => {
  const steps = [OrderStatus.PLACED, OrderStatus.IN_REVIEW, OrderStatus.APPROVED, OrderStatus.COMPLETED];
  const currentIndex = steps.indexOf(status === OrderStatus.CANCELLED ? OrderStatus.COMPLETED : status);

  return (
    <div className="flex items-center justify-between w-full relative mb-6">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 -z-10"></div>
      {steps.map((step, idx) => (
        <div key={step} className="flex flex-col items-center gap-1 bg-white px-2">
          {idx <= currentIndex ? (
            <CheckCircle2 size={20} className="text-green-500 fill-green-50" />
          ) : (
            <Circle size={20} className="text-slate-300 fill-white" />
          )}
          <span className={`text-[10px] font-medium uppercase tracking-wider ${idx <= currentIndex ? 'text-slate-900' : 'text-slate-400'}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

const CurrentOrderWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Current Order</h3>
      <div className="flex items-start gap-4 mb-6">
        <img src={CURRENT_ORDER.restaurantImage} className="w-16 h-16 rounded-lg object-cover" alt={CURRENT_ORDER.restaurantName} />
        <div>
          <h4 className="font-bold text-slate-900 text-lg">{CURRENT_ORDER.restaurantName}</h4>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Event: {CURRENT_ORDER.date}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
            <MapPin size={14} /> {CURRENT_ORDER.type}
          </p>
        </div>
      </div>

      <StatusTimeline status={CURRENT_ORDER.status} />

      <div className="space-y-2 mb-6 bg-slate-50 p-3 rounded-lg">
        {CURRENT_ORDER.items.map(item => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-slate-700 font-medium">{item.quantity}x {item.name}</span>
            <span className="text-slate-500">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-4 space-y-2">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal:</span>
          <span>${CURRENT_ORDER.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Tax:</span>
          <span>${CURRENT_ORDER.tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-slate-900 pt-2 text-lg">
          <span>Total:</span>
          <span>${CURRENT_ORDER.total.toFixed(2)}</span>
        </div>
      </div>
      
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
        View Order Details <ChevronRight size={18} />
      </button>
    </div>
  );
};

const PastOrdersWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">Past Orders</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {PAST_ORDERS.map(order => (
          <div key={order.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={order.restaurantImage} className="w-12 h-12 rounded-lg object-cover" alt={order.restaurantName} />
              <div>
                <h4 className="font-bold text-slate-900">{order.restaurantName}</h4>
                <p className="text-xs text-slate-500">{order.date}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              order.status === OrderStatus.COMPLETED ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const InvoicesWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-slate-800">Invoices</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {INVOICES.map(invoice => (
          <div key={invoice.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">{invoice.id}</h4>
                <p className="text-xs text-slate-500">Issued: {invoice.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900">${invoice.amount.toFixed(2)}</p>
              <span className={`text-[11px] font-bold uppercase ${
                invoice.status === 'Paid' ? 'text-green-600' : 'text-orange-600'
              }`}>
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-4 text-sm font-bold text-blue-600 hover:text-blue-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1">
        View All Invoices <ChevronRight size={16} />
      </button>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      <CurrentOrderWidget />
      <div className="space-y-8">
        <PastOrdersWidget />
      </div>
      <div className="space-y-8">
        <InvoicesWidget />
      </div>
    </div>
  );
};

export default Dashboard;
