import { useState } from 'react';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';

const TalleresPage = () => {
  const talleresData = [
    {
      nombre: 'Lorem Ipsum Dolo',
      ubicacion: {
        nombre: 'Piantini',
        direccion: 'Ave. John F. Kennedy 123'
      },
      telefono: '(809) 123-1234',
      servicio: 'Pintura (+15)'
    },
    {
      nombre: 'Lorem Ipsum Dolo',
      ubicacion: {
        nombre: 'Ensanche Kennedy',
        direccion: ''
      },
      telefono: '(809) 123-1234',
      servicio: 'Frenos (+15)'
    },
    {
      nombre: 'Lorem Ipsum Dolo',
      ubicacion: {
        nombre: 'SD Oeste',
        direccion: ''
      },
      telefono: '(809) 123-1234',
      servicio: 'Pintura (+15)'
    },
    {
      nombre: 'Lorem Ipsum Dolo',
      ubicacion: {
        nombre: 'La Julia',
        direccion: ''
      },
      telefono: '(809) 123-1234',
      servicio: 'Pintura (+15)'
    },
    {
      nombre: 'Lorem Ipsum Dolo',
      ubicacion: {
        nombre: 'Reparación',
        direccion: ''
      },
      telefono: '(809) 123-1234',
      servicio: 'Pintura (+15)'
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold font-mundial">
          Dashboard Administrativo
        </h1>
        <MainCard title="Talleres">
          <div className="px-6">
            <div className="flex justify-end mb-6">
              <button className="flex flex-row justify-center items-center px-6 py-2 gap-2 w-auto h-[33px] bg-[#C6DDED] rounded-[30px] hover:bg-[#b5cce0] transition-colors">
                <span className="text-[#0500C6] text-sm font-mundial">Agregar Taller</span>
                <span className="text-[#0500C6] text-lg leading-none">+</span>
              </button>
            </div>

            {/* Table Headers */}
            <div className="sticky top-0 bg-[#F2F2F2] py-4 z-10 grid grid-cols-4 font-mundial font-semibold text-[14px] text-[#0500C6]">
              <span>Nombre</span>
              <span>Ubicación</span>
              <span>Teléfono</span>
              <span>Servicio</span>
            </div>

            {/* Table Content */}
            <div className="mt-4">
              {talleresData.map((taller, index) => (
                <div key={index}>
                  <div className="grid grid-cols-4 items-center py-4">
                    <span className="font-mundial">{taller.nombre}</span>
                    <div>
                      <p className="font-mundial">{taller.ubicacion.nombre}</p>
                      {taller.ubicacion.direccion && (
                        <p className="font-mundial text-sm text-gray-600">
                          {taller.ubicacion.direccion}
                        </p>
                      )}
                    </div>
                    <span className="font-mundial">{taller.telefono}</span>
                    <span className="font-mundial">{taller.servicio}</span>
                  </div>
                  <div className="w-full h-0 border-t-2 border-[rgba(29,26,124,0.1)]"></div>
                </div>
              ))}
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default TalleresPage;
