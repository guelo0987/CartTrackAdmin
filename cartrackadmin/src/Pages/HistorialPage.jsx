import { useState } from 'react';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';

const HistorialPage = () => {
  const historialData = {
    '2024': [
      {
        cliente: 'Rafael Rivas',
        tipo: 'Mantenimiento',
        vehiculo: 'GLE 63 S',
        fecha: '01•08•2024'
      },
      {
        cliente: 'Roberto Rodríguez',
        tipo: 'Reparación',
        vehiculo: 'Tesla Model X 2023',
        fecha: '01•08•2024'
      },
      {
        cliente: 'Álvaro López',
        tipo: 'Evaluación',
        vehiculo: 'KGM Torres 2024',
        fecha: '01•08•2024'
      },
      {
        cliente: 'Rafael Rivas',
        tipo: 'Mantenimiento',
        vehiculo: 'GLE 63 S',
        fecha: '01•08•2024'
      },
      {
        cliente: 'Rafael Rivas',
        tipo: 'Mantenimiento',
        vehiculo: 'GLE 63 S',
        fecha: '01•08•2024'
      },
      {
        cliente: 'Rafael Rivas',
        tipo: 'Mantenimiento',
        vehiculo: 'GLE 63 S',
        fecha: '01•08•2024'
      }
    ],
    '2023': [
      {
        cliente: 'Rafael Rivas',
        tipo: 'Mantenimiento',
        vehiculo: 'GLE 63 S',
        fecha: '01•08•2024'
      }
    ]
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold font-mundial">Dashboard Administrativo</h1>
        <MainCard title="Historial">
          <div className="relative px-6">
            {/* Encabezados de columnas */}
            <div className="sticky top-0  py-4 z-10 grid grid-cols-4 font-mundial font-semibold text-[14px] text-[#0500C6]">
              <span>Cliente</span>
              <span>Tipo</span>
              <span>Vehículo</span>
              <span>Fecha</span>
            </div>

            {/* Contenido con scroll */}
            <div className="mt-4">
              {/* Sección 2024 */}
              <div className="mb-8">
                <h3 className="font-mundial font-semibold text-[20px] text-[#C6DDED] mb-4">
                  2024
                </h3>
                <div className="flex flex-col">
                  {historialData['2024'].map((item, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-4 items-center py-4 mb-4">
                        <span className="font-mundial">{item.cliente}</span>
                        <span className="font-mundial">{item.tipo}</span>
                        <span className="font-mundial">{item.vehiculo}</span>
                        <span className="font-mundial font-light text-[16px] text-[#1E1E1E]">
                          {item.fecha}
                        </span>
                      </div>
                      <div className="w-[900px] h-0 border-t-2 border-[rgba(29,26,124,0.1)]"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sección 2023 */}
              <div>
                <h3 className="font-mundial font-semibold text-[20px] text-[#C6DDED] mb-4">
                  2023
                </h3>
                <div className="flex flex-col">
                  {historialData['2023'].map((item, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-4 items-center py-4">
                        <span className="font-mundial">{item.cliente}</span>
                        <span className="font-mundial">{item.tipo}</span>
                        <span className="font-mundial">{item.vehiculo}</span>
                        <span className="font-mundial font-light text-[16px] text-[#1E1E1E]">
                          {item.fecha}
                        </span>
                      </div>
                      <div className="w-[900px] h-0 border-t-2 border-[rgba(29,26,124,0.1)]"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default HistorialPage;
