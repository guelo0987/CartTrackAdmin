import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';
import { ArrowLeft, Eye, Check } from 'lucide-react';
import { GetTabs } from '../Components/TabsHeader';
import { useState, useEffect } from 'react';

const SolicitudActivaDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  // Determinar el tipo de solicitud basado en la URL
  const [activeTab, setActiveTab] = useState('activos');
  
  useEffect(() => {
    // Extraer el tipo de la URL (activos, pendientes, denegadas)
    const pathParts = location.pathname.split('/');
    const typeIndex = pathParts.findIndex(part => 
      ['activos', 'pendiente', 'denegadas'].includes(part)
    );
    
    if (typeIndex !== -1) {
      let tabType = pathParts[typeIndex];
      // Convertir "pendiente" a "pendientes" para que coincida con los nombres de los tabs
      if (tabType === 'pendiente') tabType = 'pendientes';
      setActiveTab(tabType);
    }
  }, [location]);
  
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
        <MainCard title="Solicitudes" tabs={solicitudesTabs} onTabChange={handleTabChange} activeTab={activeTab}>
          <div className="relative p-6">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#0500C6] mb-6"
            >
              <ArrowLeft size={20} />
              <span>Volver</span>
            </button>

            <div className="flex flex-col gap-7 max-w-[600px] mx-auto">
              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-row items-center gap-2">
                  <h2 className="text-2xl font-bold">{solicitudData.cliente}</h2>
                  <p className="text-gray-600">{solicitudData.telefono}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Tipo de Cita:</p>
                  <p className="ml-4">{solicitudData.tipoCita}</p>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Mantenimiento:</p>
                  <p className="ml-4">{solicitudData.mantenimiento}</p>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Fecha:</p>
                  <p className="ml-4">{solicitudData.fecha}</p>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Hora:</p>
                  <p className="ml-4">{solicitudData.hora}</p>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Vehículo:</p>
                  <div className="flex items-center gap-2 ml-4">
                    <p>{solicitudData.vehiculo}</p>
                    <Eye size={16} className="text-[#0500C6] cursor-pointer" />
                  </div>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Taller:</p>
                  <div className="ml-4">
                    <p className="font-medium">{solicitudData.taller.nombre}</p>
                    <p>{solicitudData.taller.direccion}</p>
                    <p>{solicitudData.taller.distrito}</p>
                    <p>{solicitudData.taller.telefono}</p>
                  </div>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <p className="text-[#0500C6] font-semibold w-32">Documentos:</p>
                  <div className="flex items-center justify-between gap-[49px] ml-4">
                    <span>Factura {solicitudData.documentos.factura}</span>
                    <Eye className="text-[#0500C6] cursor-pointer" size={16} />
                  </div>
                </div>
                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
              </div>
            </div>

            <div className="absolute right-[100px] top-[160px] flex flex-col gap-6">
              <button 
                onClick={handleFinish}
                className="w-[202px] h-[34px] flex justify-center items-center gap-2 bg-[#52DA96] text-white rounded-[30px]"
              >
                <Check size={16} color="black" />
                Terminar Solicitud
              </button>
              
              <button className="w-[125px] h-[33px] flex justify-center items-center bg-[#C6DDED] text-[#0500C6] rounded-[30px] self-end">
                Actualizar
              </button>
              
              <button className="w-[202px] h-[33px] flex justify-center items-center bg-[#C6DDED] text-[#0500C6] rounded-[30px]">
                Adjuntar Documentos
              </button>
            </div>
          </div>
        </MainCard>
      </div>
    </div>
  );
};

export default SolicitudActivaDetailPage; 