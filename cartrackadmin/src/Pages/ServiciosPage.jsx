import { useState } from 'react';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';

const ServiciosPage = () => {
  const [selectedService, setSelectedService] = useState('Mantenimiento');

  // Service options
  const activeServices = [
    { id: 1, name: 'Mantenimiento' },
    { id: 2, name: 'Reparación' },
    { id: 3, name: 'Opción' },
    { id: 4, name: 'Opción 4' },
    { id: 5, name: 'Opción 5' },
    { id: 6, name: 'Opción 6' },
  ];

  const inactiveServices = [
    { id: 7, name: 'Opción 7' },
    { id: 8, name: 'Opción 8' },
  ];

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };

  const isSelectedServiceInactive = inactiveServices.some(
    service => service.name === selectedService
  );

  const handleModify = () => {
    console.log('Modificar servicio:', selectedService);
  };

  const handleActiveToggle = () => {
    if (isSelectedServiceInactive) {
      console.log('Activar servicio:', selectedService);
    } else {
      console.log('Desactivar servicio:', selectedService);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold font-mundial md:text-2xl sm:text-xl xs:text-lg sm:px-5 sm:py-5">Dashboard Administrativo</h1>
        
        <MainCard title="Servicios">
          <div className="p-6 relative sm:p-4 xs:p-2">
            {/* Service management buttons */}
            <div className="absolute right-10 top-0 flex flex-col gap-4 md:right-6 sm:right-4 xs:right-2 xs:gap-2">
              <button 
                onClick={handleModify}
                className="w-[122px] h-[33px] flex justify-center items-center bg-[#C6DDED] text-[#0500C6] rounded-[30px] font-mundial md:w-[100px] sm:w-[90px] xs:w-[80px] xs:h-[28px] xs:text-sm"
              >
                Modificar
              </button>
              <button 
                onClick={handleActiveToggle}
                className={`w-[130px] h-[33px] flex justify-center items-center rounded-[30px] font-mundial md:w-[110px] sm:w-[90px] xs:w-[80px] xs:h-[28px] xs:text-sm
                  ${isSelectedServiceInactive 
                    ? 'bg-[#52DA96] text-white' 
                    : 'bg-[#DA5F52] text-white'
                  }`}
              >
                {isSelectedServiceInactive ? 'Activar' : 'Desactivar'}
              </button>
            </div>

            {/* Active services section */}
            <div className="mb-12 sm:mb-8 xs:mb-6">
              <h2 className="text-[#0500C6] font-semibold text-sm mb-4 font-mundial xs:mb-2">Activos</h2>
              <div className="grid grid-cols-3 gap-2">
                {activeServices.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => handleServiceClick(service.name)}
                    className={`w-[180px] h-[160px] rounded-lg flex items-center justify-center cursor-pointer font-mundial 
                      md:w-[150px] md:h-[140px] sm:w-[120px] sm:h-[110px] xs:w-[100px] xs:h-[90px]
                      ${selectedService === service.name 
                        ? 'bg-[#0500C6] text-white' 
                        : 'bg-white text-[#0500C6]'
                    }`}
                  >
                    <span className="font-medium text-center sm:text-sm xs:text-xs px-2">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical separator */}
            <div className="h-[633px] w-[2px] bg-[rgba(29,26,124,0.1)] absolute right-[200px] top-0 md:right-[170px] sm:right-[120px] xs:right-[100px]"></div>

            {/* Inactive services section */}
            <div>
              <h2 className="text-[#0500C6] font-semibold text-sm mb-4 font-mundial xs:mb-2">Inactivos</h2>
              <div className="grid grid-cols-3 gap-1">
                {inactiveServices.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => handleServiceClick(service.name)}
                    className={`w-[180px] h-[160px] rounded-lg flex items-center justify-center cursor-pointer font-mundial 
                      md:w-[150px] md:h-[140px] sm:w-[120px] sm:h-[110px] xs:w-[100px] xs:h-[90px]
                      ${selectedService === service.name 
                        ? 'bg-[#0500C6] text-white' 
                        : 'bg-white text-[#0500C6]'
                    }`}
                  >
                    <span className="font-medium text-center sm:text-sm xs:text-xs px-2">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default ServiciosPage;
