
import { 
  Pause, 
  X, 
  Save, 
  FileText, 
  Mail, 
  MessageCircle, 
  Phone, 
  CreditCard, 
  Printer, 
  RotateCcw 
} from 'lucide-react';

interface ActionButtonsProps {
  onHold: () => void;
  onCancel: () => void;
  onSaveNew: () => void;
  onSaveClose: () => void;
  onProcess: () => void;
  onPrint: () => void;
  onReset: () => void;
}

export const ActionButtons = ({
  onHold,
  onCancel,
  onSaveNew,
  onSaveClose,
  onProcess,
  onPrint,
  onReset
}: ActionButtonsProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
      
      <div className="space-y-4">
        {/* Primary Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onProcess}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <CreditCard size={18} />
            Process Payment
          </button>
          
          <button
            onClick={onPrint}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Printer size={18} />
            Save & Print
          </button>
        </div>
        
        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onHold}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
          >
            <Pause size={16} />
            Hold Sale
          </button>
          
          <button
            onClick={onSaveNew}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Save size={16} />
            Save & New
          </button>
        </div>
        
        {/* Communication Actions */}
        <div className="border-t pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Send Invoice:</p>
          <div className="grid grid-cols-3 gap-3">
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Mail size={14} />
              E-Bill
            </button>
            
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <MessageCircle size={14} />
              WhatsApp
            </button>
            
            <button className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Phone size={14} />
              Send SMS
            </button>
          </div>
        </div>
        
        {/* Utility Actions */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={onCancel}
              className="flex items-center justify-center gap-2 px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm"
            >
              <X size={14} />
              Cancel
            </button>
            
            <button
              onClick={onSaveClose}
              className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              <FileText size={14} />
              Save & Close
            </button>
            
            <button
              onClick={onReset}
              className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
