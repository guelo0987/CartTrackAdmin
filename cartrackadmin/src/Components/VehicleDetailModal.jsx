import { ArrowLeft, Edit, Eye, Info } from 'lucide-react';

const VehicleDetailModal = ({ vehicle, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-[#C6DDED] opacity-65 z-40"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-[20px] p-8 w-[672px] relative">
          {/* Back Button */}
          <button 
            onClick={onClose}
            className="absolute left-[37px] top-[34px]"
          >
            <ArrowLeft size={25} className="text-[#0500C6]" />
          </button>

          {/* Edit Button */}
          <button className="absolute right-[37px] top-[34px]">
            <Edit size={19} className="text-[#0500C6]" />
          </button>

          {/* Title */}
          <h2 className="text-[#0500C6] text-xl font-semibold mt-[84px] mb-8">
            Vehículo Registrado
          </h2>

          {/* Vehicle Details */}
          <div className="flex flex-col gap-7 mt-[127px]">
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Marca:</span>
              <span>{vehicle.marca}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Modelo:</span>
              <span>{vehicle.modelo}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Año:</span>
              <span>{vehicle.año}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Color:</span>
              <span>{vehicle.color}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Placa:</span>
              <span>{vehicle.placa}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Kilometraje:</span>
              <span>{vehicle.kilometraje}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0500C6] font-semibold w-32">Seguro:</span>
              <div className="flex items-center gap-2">
                <span>{vehicle.seguro}</span>
                <Eye size={16} className="text-[#0500C6] cursor-pointer" />
                <Info size={16} className="text-[#0500C6] cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="mt-8">
            <span className="text-[#0500C6] font-semibold">Fotos:</span>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index}
                  className="w-[100px] h-[100px] bg-[#F2F2F2] rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetailModal;
