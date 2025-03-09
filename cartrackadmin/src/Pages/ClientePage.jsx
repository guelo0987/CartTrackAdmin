import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';
import ClientTable from '../Components/ClientTable';
import { GetTabs } from '../Components/TabsHeader';

const ClientePage = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState('activos');
  
  // Determinar el tab activo basado en la última navegación
  useEffect(() => {
    // Si venimos de una página de detalle, intentamos extraer el tipo
    if (location.state && location.state.fromTab) {
      setCurrentTab(location.state.fromTab);
    }
  }, [location]);
  
  const [clientData, setClientData] = useState({
    activos: [
      { id: 1, nombre: 'Manuel Vargas', vehiculo: 'Mercedes Benz GLE 63 S', notifications: 1 },
      { id: 2, nombre: 'Roberto Rodríguez', vehiculo: 'Tesla Model X 2023', notifications: 3 },
      { id: 3, nombre: 'Álvaro López', vehiculo: 'KGM Torres 2024' },
      ...Array.from({ length: 20 }, (_, i) => ({
        id: i + 4,
        nombre: `Cliente Activo ${i + 4}`,
        vehiculo: `Vehículo ${i + 4}`,
        notifications: i % 3 === 0 ? 2 : undefined
      }))
    ],
    pendientes: [
      { id: 101, nombre: 'Carlos Mendoza', vehiculo: 'BMW X5 2024', notifications: 2 },
      { id: 102, nombre: 'Ana García', vehiculo: 'Audi Q8 2023', notifications: 1 },
      ...Array.from({ length: 10 }, (_, i) => ({
        id: 103 + i,
        nombre: `Cliente Pendiente ${i + 3}`,
        vehiculo: `Vehículo Pendiente ${i + 3}`,
      }))
    ],
    cancelados: [
      { nombre: 'Pedro Sánchez', vehiculo: 'Ford Mustang 2023' },
      { nombre: 'María Torres', vehiculo: 'Chevrolet Camaro 2024' },
      ...Array.from({ length: 5 }, (_, i) => ({
        nombre: `Cliente Cancelado ${i + 3}`,
        vehiculo: `Vehículo Cancelado ${i + 3}`,
      }))
    ],
    suspendidos: [
      { nombre: 'Jorge Ramírez', vehiculo: 'Toyota Supra 2024' },
      { nombre: 'Laura Pérez', vehiculo: 'Nissan GT-R 2023' },
      ...Array.from({ length: 8 }, (_, i) => ({
        nombre: `Cliente Suspendido ${i + 3}`,
        vehiculo: `Vehículo Suspendido ${i + 3}`,
      }))
    ]
  });

  const [tabCounts, setTabCounts] = useState({
    activos: 0,
    pendientes: 0,
    cancelados: 0,
    suspendidos: 0
  });

  useEffect(() => {
    // Update tab counts based on actual data
    setTabCounts({
      activos: clientData.activos.length,
      pendientes: clientData.pendientes.length,
      cancelados: clientData.cancelados.length,
      suspendidos: clientData.suspendidos.length
    });
  }, [clientData]);

  const clientTabs = GetTabs(tabCounts, "Clientes");

  const handleTabChange = (value) => {
    setCurrentTab(value.toLowerCase());
    // Here you would typically fetch new data based on the tab
    // For now, we're using the mock data
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold">Dashboard Administrativo</h1>
        <MainCard title="Clientes" tabs={clientTabs} onTabChange={handleTabChange} activeTab={currentTab}>
          <ClientTable 
            data={clientData[currentTab]} 
            currentTab={currentTab}
          />
        </MainCard>
      </div>
    </div>
  );
};

export default ClientePage;
