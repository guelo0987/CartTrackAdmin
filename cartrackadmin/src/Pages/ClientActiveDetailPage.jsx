import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';
import { ArrowLeft, Edit, Eye, Info } from 'lucide-react';
import { getClientTabs } from '../Components/TabsCliente';
import { useState } from 'react';
import VehicleDetailModal from '../Components/VehicleDetailModal';

const ClientActiveDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Add tab counts state
  const [tabCounts, setTabCounts] = useState({
    activos: 0,
    pendientes: 0,
    cancelados: 0,
    suspendidos: 0
  });

  // Get the shared tabs configuration
  const clientTabs = getClientTabs(tabCounts);

  // Mock data - replace with actual data fetching
  const clientData = {
    nombre: "Rafael Rivas",
    correo: "example@example.com",
    telefono: "(829)123-1234",
    direccion: "Ave. José Contreras 45, Distrito Nacional",
    cedula: "Archivo cargado",
    membresia: "Personal",
    rating: 4.0,
    vehiculos: [
      { id: 1, nombre: "Chevrolet Tahoe 2024" },
      { id: 2, nombre: "Tesla Model X 2023" }
    ]
  };

  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleTabChange = (tab) => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold">Dashboard Administrativo</h1>
        <MainCard title="Clientes" tabs={clientTabs} onTabChange={handleTabChange}>
          <div className="relative">
            {/* Back button */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#0500C6] mb-6"
            >
              <ArrowLeft size={20} />
              <span>Volver</span>
            </button>

            {/* Client name and actions */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-8">
                <h2 className="text-2xl font-bold">{clientData.nombre}</h2>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-green-500">★</span>
                  ))}
                  <span className="text-gray-400">★</span>
                  <span className="text-[#0500C6] ml-2">{clientData.rating}</span>
                  <Edit size={16} className="text-[#0500C6] cursor-pointer ml-2" />
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-2 rounded-full bg-[#C6DDED] text-[#0500C6]">
                  Suspender cuenta
                </button>
                <button className="px-8 py-2 rounded-full bg-[#C6DDED] text-[#0500C6]">
                  Cancelar cuenta
                </button>
              </div>
            </div>

            {/* Membership info */}
            <div className="mb-8">
              <h3 className="text-[#0500C6] text-xl font-semibold mb-4">
                {clientData.membresia}
              </h3>
            </div>

            {/* Two column layout */}
            <div className="grid grid-cols-2 gap-8">
              {/* Personal Data */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-[#0500C6] font-semibold">Datos Personales</h4>
                  <Edit size={16} className="text-[#0500C6] cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#0500C6] font-medium">Nombre:</p>
                    <p>{clientData.nombre}</p>
                  </div>
                  <div>
                    <p className="text-[#0500C6] font-medium">Correo:</p>
                    <p>{clientData.correo}</p>
                  </div>
                  <div>
                    <p className="text-[#0500C6] font-medium">Teléfono:</p>
                    <p>{clientData.telefono}</p>
                  </div>
                  <div>
                    <p className="text-[#0500C6] font-medium">Dirección:</p>
                    <p>{clientData.direccion}</p>
                  </div>
                  <div>
                    <p className="text-[#0500C6] font-medium">Cédula:</p>
                    <div className="flex items-center gap-2">
                      <span>{clientData.cedula}</span>
                      <Eye size={16} className="text-[#0500C6] cursor-pointer" />
                      <Info size={16} className="text-[#0500C6] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Registered Vehicles */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-[#0500C6] font-semibold mb-4">Vehículos Registrados</h4>
                <div className="space-y-4">
                  {clientData.vehiculos.map((vehiculo, index) => (
                    <div 
                      key={vehiculo.id}
                      onClick={() => setSelectedVehicle({
                        ...vehiculo,
                        marca: "Chevrolet",
                        modelo: "Tahoe",
                        año: "2024",
                        color: "Navy",
                        placa: "FLA4444",
                        kilometraje: "5,000 Km.",
                        seguro: "Archivo cargado"
                      })}
                      className="cursor-pointer"
                    >
                      <p className="text-[#0500C6] font-medium">Vehículo {index + 1}:</p>
                      <p>{vehiculo.nombre}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MainCard>

        {/* Add modal */}
        {selectedVehicle && (
          <VehicleDetailModal 
            vehicle={selectedVehicle} 
            onClose={() => setSelectedVehicle(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default ClientActiveDetailPage;