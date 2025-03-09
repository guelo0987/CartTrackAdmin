import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';
import { ArrowLeft, Eye } from 'lucide-react';
import { GetTabs } from '../Components/TabsHeader';
import { useState } from 'react';

const SolicitudActivaDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [tabCounts, setTabCounts] = useState({
    activos: 3,
    pendientes: 6,
    denegadas: 2
  });

  const solicitudesTabs = GetTabs(tabCounts, "Solicitudes", ['activos', 'pendientes', 'denegadas']);

  const solicitudData = {
    cliente: "Rafael Rivas",
    telefono: "(829) 764-6205",
    tipoCita: "Mantenimiento",
    mantenimiento: "10,000 Km.",
    fecha: "18•08•2024",
    hora: "11:30 AM",
    vehiculo: "Tesla Model X 2023",
    taller: {
      nombre: "Autozama",
      direccion: "Ave. John F. Kennedy 123",
      distrito: "Distrito Nacional",
      telefono: "(809) 123-1234"
    },
    documentos: {
      factura: "0034356"
    }
  };

  const handleTabChange = (tab) => {
    navigate('/solicitudes');
  };

  const handleFinish = () => {
    console.log('Terminar solicitud:', id);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 relative">
        <h1 className="text-3xl text-[#0500C6] px-10 py-10 font-bold">Dashboard Administrativo</h1>
        <MainCard title="Solicitudes" tabs={solicitudesTabs} onTabChange={handleTabChange} activeTab="activos">
          <div className="relative p-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#0500C6] mb-6"
            >
              <ArrowLeft size={20} />
              <span>Volver</span>
            </button>

            <div className="flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold">{solicitudData.cliente}</h2>
                  <p className="text-gray-600">{solicitudData.telefono}</p>
                </div>
                <button 
                  onClick={handleFinish}
                  className="bg-[#52DA96] text-white rounded-[30px] px-6 py-2"
                >
                  Terminar Solicitud
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                <div>
                  <p className="text-[#0500C6] font-semibold">Tipo de Cita:</p>
                  <p>{solicitudData.tipoCita}</p>
                </div>
                
                <div>
                  <p className="text-[#0500C6] font-semibold">Mantenimiento:</p>
                  <p>{solicitudData.mantenimiento}</p>
                </div>
                
                <div>
                  <p className="text-[#0500C6] font-semibold">Fecha:</p>
                  <p>{solicitudData.fecha}</p>
                </div>
                
                <div>
                  <p className="text-[#0500C6] font-semibold">Hora:</p>
                  <p>{solicitudData.hora}</p>
                </div>
                
                <div>
                  <p className="text-[#0500C6] font-semibold">Vehículo:</p>
                  <p>{solicitudData.vehiculo}</p>
                </div>
                
                <div>
                  <p className="text-[#0500C6] font-semibold">Taller:</p>
                  <div>
                    <p className="font-medium">{solicitudData.taller.nombre}</p>
                    <p>{solicitudData.taller.direccion}</p>
                    <p>{solicitudData.taller.distrito}</p>
                    <p>{solicitudData.taller.telefono}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-[#C6DDED] text-[#0500C6] rounded-[30px] px-6 py-2 mr-4">
                  Actualizar
                </button>
                <button className="bg-[#C6DDED] text-[#0500C6] rounded-[30px] px-6 py-2">
                  Adjuntar Documentos
                </button>
              </div>

              <div className="mt-8">
                <p className="text-[#0500C6] font-semibold">Documentos:</p>
                <div className="flex items-center gap-2 mt-2">
                  <span>Factura {solicitudData.documentos.factura}</span>
                  <Eye className="text-[#0500C6] cursor-pointer" size={16} />
                </div>
              </div>
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default SolicitudActivaDetailPage; 