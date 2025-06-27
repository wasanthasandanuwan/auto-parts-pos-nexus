
interface TransactionHeaderProps {
  data: any;
  onChange: (data: any) => void;
}

export const TransactionHeader = ({ data, onChange }: TransactionHeaderProps) => {
  const handleInputChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice & Transaction Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Row */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Invoice No.</label>
          <input
            type="text"
            value={data.invoiceNo}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            value={data.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
          <input
            type="text"
            value={data.time}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700"
          />
        </div>
        
        {/* Second Row */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sales Person</label>
          <select
            value={data.salesPerson}
            onChange={(e) => handleInputChange('salesPerson', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Sales Person</option>
            <option value="john_doe">John Doe</option>
            <option value="jane_smith">Jane Smith</option>
            <option value="mike_wilson">Mike Wilson</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order Type</label>
          <select
            value={data.orderType}
            onChange={(e) => handleInputChange('orderType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Retail Sale">Retail Sale</option>
            <option value="Wholesale Order">Wholesale Order</option>
            <option value="Return">Return</option>
            <option value="Workshop Order">Workshop Order</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ref/PO No.</label>
          <input
            type="text"
            value={data.refNo}
            onChange={(e) => handleInputChange('refNo', e.target.value)}
            placeholder="Reference or PO Number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Third Row */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Attent</label>
          <input
            type="text"
            value={data.attent}
            onChange={(e) => handleInputChange('attent', e.target.value)}
            placeholder="Attention to"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Terms</label>
          <input
            type="text"
            value={data.terms}
            onChange={(e) => handleInputChange('terms', e.target.value)}
            placeholder="Payment terms"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            value={data.dueDate}
            onChange={(e) => handleInputChange('dueDate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
