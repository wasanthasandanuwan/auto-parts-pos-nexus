
import { useState } from 'react';
import { Search, Plus, Trash } from 'lucide-react';

interface BillingGridProps {
  items: any[];
  onChange: (items: any[]) => void;
  vehicle: any;
}

export const BillingGrid = ({ items, onChange, vehicle }: BillingGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      partNumber: 'P' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      description: 'Sample Auto Part',
      brand: 'OEM',
      compatibility: 'OK',
      stock: Math.floor(Math.random() * 100) + 1,
      quantity: 1,
      unitPrice: Math.floor(Math.random() * 1000) + 100,
      discountPercent: 0,
      discountAmount: 0,
      class: 'Engine Parts',
      site: 'Main Warehouse',
      unit: 'Pcs',
      serialNumber: ''
    };
    onChange([...items, newItem]);
  };

  const removeItem = (id: string) => {
    onChange(items.filter(item => item.id !== id));
  };

  const updateItem = (id: string, field: string, value: any) => {
    onChange(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const getStockStatus = (stock: number) => {
    if (stock > 50) return { color: 'text-green-600', bg: 'bg-green-100', label: 'In Stock' };
    if (stock > 10) return { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Low Stock' };
    return { color: 'text-red-600', bg: 'bg-red-100', label: 'Out of Stock' };
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Item Entry (Billing Grid)</h3>
      
      <div className="mb-4 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search parts by number, description, or brand / Scan barcode..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={addItem}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={16} />
          Add Item
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">Part #</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">Description</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase">Brand</th>
              <th className="border border-gray-300 px-3 py-2 text-center text-xs font-medium text-gray-700 uppercase">Comp.</th>
              <th className="border border-gray-300 px-3 py-2 text-center text-xs font-medium text-gray-700 uppercase">Stock</th>
              <th className="border border-gray-300 px-3 py-2 text-center text-xs font-medium text-gray-700 uppercase">Qty</th>
              <th className="border border-gray-300 px-3 py-2 text-right text-xs font-medium text-gray-700 uppercase">Price</th>
              <th className="border border-gray-300 px-3 py-2 text-center text-xs font-medium text-gray-700 uppercase">Disc %</th>
              <th className="border border-gray-300 px-3 py-2 text-right text-xs font-medium text-gray-700 uppercase">Total</th>
              <th className="border border-gray-300 px-3 py-2 text-center text-xs font-medium text-gray-700 uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const stockStatus = getStockStatus(item.stock);
              const total = (item.quantity * item.unitPrice) - item.discountAmount - (item.quantity * item.unitPrice * item.discountPercent / 100);
              
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 text-sm font-mono">{item.partNumber}</td>
                  <td className="border border-gray-300 px-3 py-2 text-sm">{item.description}</td>
                  <td className="border border-gray-300 px-3 py-2 text-sm">{item.brand}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.compatibility === 'OK' ? 'bg-green-100 text-green-800' :
                      item.compatibility === 'Mismatch' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.compatibility}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.bg} ${stockStatus.color}`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      min="1"
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right text-sm font-medium">
                    LKR {item.unitPrice.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    <input
                      type="number"
                      value={item.discountPercent}
                      onChange={(e) => updateItem(item.id, 'discountPercent', parseFloat(e.target.value) || 0)}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                      min="0"
                      max="100"
                    />
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right text-sm font-medium">
                    LKR {total.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                    >
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
            {items.length === 0 && (
              <tr>
                <td colSpan={10} className="border border-gray-300 px-3 py-8 text-center text-gray-500">
                  No items added. Search and add parts to begin.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
