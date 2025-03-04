import { ArrowLeft } from 'lucide-react';

const DenyRequestModal = ({ onClose, onDeny }) => {
  const reasons = [
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
    "Razón para negación de la solicitud",
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-[#C6DDED] opacity-65 z-40"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-[20px] p-8 w-[672px] h-[416px] relative">
          {/* Back Button */}
          <button 
            onClick={onClose}
            className="absolute w-[25px] h-[26.2px] left-[37px] top-[35.63px]"
          >
            <ArrowLeft size={25} className="text-[#0500C6]" />
          </button>

          {/* Title */}
          <h2 className="absolute w-[166px] h-[19px] left-[calc(50%-166px/2-214px)] top-[84px] text-[#0500C6] font-semibold text-[20px] leading-[19px]">
            Denegar Solicitud
          </h2>

          {/* Reasons Grid */}
          <div className="absolute top-[127px] left-[41px] right-[41px]">
            <div className="grid grid-cols-2 gap-x-[27px] gap-y-[31px]">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4"
                >
                  <input 
                    type="radio" 
                    name="denyReason" 
                    className="text-[#0500C6]"
                  />
                  <span className="text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deny Button */}
          <button
            onClick={onDeny}
            className="absolute w-[116px] h-[33px] left-[41px] bottom-[11px] bg-[#DA5F52] text-white rounded-[30px] flex justify-center items-center px-[30px] py-[10px]"
          >
            Denegar
          </button>
        </div>
      </div>
    </>
  );
};

export default DenyRequestModal;
