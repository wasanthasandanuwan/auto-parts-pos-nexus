
interface PaymentSummaryProps {
  totals: any;
  onChange: (totals: any) => void;
}

export const PaymentSummary = ({ totals, onChange }: PaymentSummaryProps) => {
  const handleInputChange = (field: string, value: number) => {
    const newTotals = { ...totals, [field]: value };
    
    // Recalculate grand total
    const subtotal = newTotals.subtotal;
    const overallDiscount = newTotals.overallDiscountAmount + (subtotal * newTotals.overallDiscountPercent / 100);
    const taxableAmount = subtotal - overallDiscount;
    const sscl = taxableAmount * (newTotals.sscl / 100);
    const vat = taxableAmount * (newTotals.vat / 100);
    const grandTotal = subtotal - overallDiscount + sscl + vat + newTotals.shipping + newTotals.roundOff;
    
    onChange({ ...newTotals, grandTotal });
  };

  return (
    <div className="space-y-6">
      {/* Summary Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary & Payment</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Subtotal:</span>
            <span className="font-medium">LKR {totals.subtotal.toFixed(2)}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Overall Discount (%)</label>
              <input
                type="number"
                value={totals.overallDiscountPercent}
                onChange={(e) => handleInputChange('overallDiscountPercent', parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                min="0"
                max="100"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Overall Discount (LKR)</label>
              <input
                type="number"
                value={totals.overallDiscountAmount}
                onChange={(e) => handleInputChange('overallDiscountAmount', parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                min="0"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">SSCL (%)</label>
              <input
                type="number"
                value={totals.sscl}
                onChange={(e) => handleInputChange('sscl', parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                step="0.1"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">VAT (%)</label>
              <input
                type="number"
                value={totals.vat}
                onChange={(e) => handleInputChange('vat', parseFloat(e.target.value) || 0)}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                step="0.1"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs text-gray-600 mb-1">Shipping/Handling Charges</label>
            <input
              type="number"
              value={totals.shipping}
              onChange={(e) => handleInputChange('shipping', parseFloat(e.target.value) || 0)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              min="0"
            />
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Grand Total:</span>
              <span className="text-blue-600">LKR {totals.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Method Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Payment Details</h4>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Payment Method</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="upi">UPI</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="credit">Credit</option>
              <option value="loyalty_points">Loyalty Points</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Amount Received</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Change Due</label>
              <input
                type="number"
                value="0.00"
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Memo</label>
            <textarea
              rows={3}
              placeholder="Internal notes or remarks..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
