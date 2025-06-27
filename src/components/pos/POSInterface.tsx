
import { useState } from 'react';
import { TransactionHeader } from './TransactionHeader';
import { CustomerSection } from './CustomerSection';
import { VehicleSection } from './VehicleSection';
import { BillingGrid } from './BillingGrid';
import { PaymentSummary } from './PaymentSummary';
import { ActionButtons } from './ActionButtons';

export const POSInterface = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNo: 'INV-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
    salesPerson: '',
    orderType: 'Retail Sale',
    refNo: '',
    attent: '',
    terms: '',
    dueDate: ''
  });

  const [customer, setCustomer] = useState({
    id: '',
    name: '',
    phone: '',
    address: '',
    loyaltyPoints: 0,
    isWalkIn: false,
    walkInData: {
      name: '',
      phone: '',
      address: '',
      shopName: ''
    }
  });

  const [vehicle, setVehicle] = useState({
    make: '',
    model: '',
    vin: '',
    licensePlate: '',
    compatibility: 'Unknown'
  });

  const [items, setItems] = useState([]);
  const [totals, setTotals] = useState({
    subtotal: 0,
    overallDiscountPercent: 0,
    overallDiscountAmount: 0,
    sscl: 0,
    vat: 0,
    shipping: 0,
    roundOff: 0,
    grandTotal: 0
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Point of Sale</h1>
        
        <TransactionHeader data={invoiceData} onChange={setInvoiceData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <CustomerSection customer={customer} onChange={setCustomer} />
          <VehicleSection vehicle={vehicle} onChange={setVehicle} />
        </div>
        
        <div className="mt-6">
          <BillingGrid items={items} onChange={setItems} vehicle={vehicle} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <PaymentSummary totals={totals} onChange={setTotals} />
          <ActionButtons 
            onHold={() => console.log('Hold sale')}
            onCancel={() => console.log('Cancel order')}
            onSaveNew={() => console.log('Save & New')}
            onSaveClose={() => console.log('Save & Close')}
            onProcess={() => console.log('Process payment')}
            onPrint={() => console.log('Save & Print')}
            onReset={() => console.log('Reset')}
          />
        </div>
      </div>
    </div>
  );
};
