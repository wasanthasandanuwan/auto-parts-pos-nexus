
import { useState } from 'react';
import { Search, Plus, User } from 'lucide-react';

interface CustomerSectionProps {
  customer: any;
  onChange: (customer: any) => void;
}

export const CustomerSection = ({ customer, onChange }: CustomerSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleWalkIn = () => {
    onChange({
      ...customer,
      isWalkIn: !customer.isWalkIn,
      walkInData: customer.isWalkIn ? { name: '', phone: '', address: '', shopName: '' } : customer.walkInData
    });
  };

  const handleWalkInChange = (field: string, value: string) => {
    onChange({
      ...customer,
      walkInData: { ...customer.walkInData, [field]: value }
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <User size={20} />
        Customer Information
      </h3>
      
      {!customer.isWalkIn ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search Customer</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, phone, or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {customer.name && (
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="font-medium text-blue-900">{customer.name}</p>
              <p className="text-blue-700 text-sm">{customer.phone}</p>
              <p className="text-blue-700 text-sm">Loyalty Points: <span className="font-medium">{customer.loyaltyPoints}</span></p>
            </div>
          )}
          
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus size={16} />
            New Customer
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Walk-in Name</label>
              <input
                type="text"
                value={customer.walkInData.name}
                onChange={(e) => handleWalkInChange('name', e.target.value)}
                placeholder="Customer name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={customer.walkInData.phone}
                onChange={(e) => handleWalkInChange('phone', e.target.value)}
                placeholder="Phone number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={customer.walkInData.address}
                onChange={(e) => handleWalkInChange('address', e.target.value)}
                placeholder="Customer address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
              <input
                type="text"
                value={customer.walkInData.shopName}
                onChange={(e) => handleWalkInChange('shopName', e.target.value)}
                placeholder="Business/Shop name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={customer.isWalkIn}
            onChange={handleToggleWalkIn}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-700">Walk-in Customer</span>
        </label>
      </div>
    </div>
  );
};
