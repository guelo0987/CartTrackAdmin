import { useState } from 'react';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';
import SolicitudesTable from '../Components/SolicitudesTable';
import { GetTabs } from '../Components/TabsHeader';

const SolicitudesPage = () => {
  const [currentTab, setCurrentTab] = useState('activos');
  const [solicitudesData, setSolicitudesData] = useState({
    activos: [
      { id: 1, cliente: 'Manuel Vargas', tipo: 'Mantenimiento', vehiculo: 'GLE 63 S' },
      { id: 2, cliente: 'Roberto Rodríguez', tipo: 'Reparación', vehiculo: 'Tesla Model X 2023' },
      { id: 3, cliente: 'Álvaro López', tipo: 'Evaluación', vehiculo: 'KGM Torres 2024' },
    ],
    pendientes: [
      { id: 4, cliente: 'Carlos Mendoza', tipo: 'Mantenimiento', vehiculo: 'BMW X5 2024' },
      { id: 5, cliente: 'Ana García', tipo: 'Reparación', vehiculo: 'Audi Q8 2023' },
      { id: 6, cliente: 'Luis Pérez', tipo: 'Evaluación', vehiculo: 'Mercedes Benz C300' },
    ],
    denegadas: [
      { id: 7, cliente: 'Pedro López', tipo: 'Mantenimiento', vehiculo: 'BMW X5 2024' },
      { id: 8, cliente: 'Laura Martínez', tipo: 'Reparación', vehiculo: 'Audi Q8 2023' },
    ]
  });

  const [tabCounts, setTabCounts] = useState({
    activos: 3,
    pendientes: 6,
    denegadas: 2
  });

  const solicitudesTabs = GetTabs(tabCounts, "Solicitudes", ['activos', 'pendientes', 'denegadas']);

  const handleTabChange = (value) => {
    setCurrentTab(value.toLowerCase());
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold">Dashboard Administrativo</h1>
        
        

        <MainCard title="Solicitudes" tabs={solicitudesTabs} onTabChange={handleTabChange}>
          <div className="absolute w-[785px] h-[170px] left-[62px] top-[127px]">
            <SolicitudesTable 
              data={solicitudesData[currentTab]} 
              currentTab={currentTab}
            />
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default SolicitudesPage; 