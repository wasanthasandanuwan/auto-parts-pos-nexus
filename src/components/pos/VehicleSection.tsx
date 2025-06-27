
import { Truck } from 'lucide-react';

interface VehicleSectionProps {
  vehicle: any;
  onChange: (vehicle: any) => void;
}

export const VehicleSection = ({ vehicle, onChange }: VehicleSectionProps) => {
  const handleInputChange = (field: string, value: string) => {
    onChange({ ...vehicle, [field]: value });
  };

  const carMakes = [
    'Toyota', 'Honda', 'Nissan', 'Mazda', 'Suzuki', 'Mitsubishi', 
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Ford', 'Chevrolet'
  ];

  const getModels = (make: string) => {
    const modelMap = {
      'Toyota': ['Corolla', 'Camry', 'Prius', 'RAV4', 'Highlander'],
      'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
      'Nissan': ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Murano'],
    };
    return modelMap[make] || [];
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Truck size={20} />
        Vehicle Information
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Make</label>
            <select
              value={vehicle.make}
              onChange={(e) => handleInputChange('make', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Make</option>
              {carMakes.map(make => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model</label>
            <select
              value={vehicle.model}
              onChange={(e) => handleInputChange('model', e.target.value)}
              disabled={!vehicle.make}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            >
              <option value="">Select Model</option>
              {getModels(vehicle.make).map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">VIN</label>
            <input
              type="text"
              value={vehicle.vin}
              onChange={(e) => handleInputChange('vin', e.target.value)}
              placeholder="Vehicle Identification Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Plate</label>
            <input
              type="text"
              value={vehicle.licensePlate}
              onChange={(e) => handleInputChange('licensePlate', e.target.value)}
              placeholder="License plate number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Compatibility Status:</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              vehicle.compatibility === 'OK' ? 'bg-green-100 text-green-800' :
              vehicle.compatibility === 'Mismatch' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {vehicle.compatibility}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
