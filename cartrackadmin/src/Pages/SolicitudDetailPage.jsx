import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Sidebar from '../Components/sidebar';
import MainCard from '../Components/main_card';
import { ArrowLeft, Eye, Phone, Check, X } from 'lucide-react';
import { GetTabs } from '../Components/TabsHeader';
import { useState, useEffect } from 'react';

const SolicitudDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    
    // Determinar el tipo de solicitud basado en la URL
    const [activeTab, setActiveTab] = useState('pendientes');
    
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

    const [showMaintenanceDropdown, setShowMaintenanceDropdown] = useState(false);
    const [showWorkshopDropdown, setShowWorkshopDropdown] = useState(false);
    const [selectedMaintenance, setSelectedMaintenance] = useState("10,000 Km.");
    const [selectedWorkshop, setSelectedWorkshop] = useState("");

    const maintenanceOptions = ["10,000 Km.", "20,000 Km.", "30,000 Km."];
    const workshopOptions = ["Autozama", "Santo Domingo Motors", "Delta Comercial"];

    const solicitudesTabs = GetTabs(tabCounts, "Solicitudes", ['activos', 'pendientes', 'denegadas']);

    const solicitudData = {
        cliente: "Rafael Rivas",
        telefono: "(829) 764-6205",
        tipoCita: "Mantenimiento",
        mantenimiento: selectedMaintenance,
        fecha: "18•08•2024",
        hora: "11:30 AM",
        vehiculo: "Tesla Model X 2023",
        taller: selectedWorkshop
    };

    const handleTabChange = (tab) => {
        navigate('/solicitudes');
    };

    const handleApprove = () => {
        console.log('Aprobar solicitud:', id);
    };

    const handleDeny = () => {
        console.log('Denegar solicitud:', id);
    };

    const handleMaintenanceSelect = (option) => {
        setSelectedMaintenance(option);
        setShowMaintenanceDropdown(false);
    };

    const handleWorkshopSelect = (option) => {
        setSelectedWorkshop(option);
        setShowWorkshopDropdown(false);
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
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={handleApprove}
                                        className="w-[138px] h-[34px] flex justify-center items-center gap-2 bg-[#52DA96] text-white rounded-[30px]"
                                    >
                                        <Check size={16} color="black" />
                                        Aprobar
                                    </button>
                                    <button
                                        onClick={handleDeny}
                                        className="w-[153px] h-[33px] flex justify-center items-center gap-2 bg-[#DA5F52] text-white rounded-[30px]"
                                    >
                                        <X size={16} color="white" className="bg-white bg-opacity-20 rounded-full p-0.5" />
                                        Reagendar
                                    </button>
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
                                    <div className="flex items-center gap-2 ml-4 relative">
                                        <div className="relative bg-white rounded-[20px] w-[324px] h-[67px] flex items-center px-4">
                                            <p>{solicitudData.mantenimiento}</p>
                                            <span
                                                className="text-gray-500 cursor-pointer absolute right-4"
                                                onClick={() => setShowMaintenanceDropdown(!showMaintenanceDropdown)}
                                            >▼</span>
                                            {showMaintenanceDropdown && (
                                                <div className="absolute w-[266px] bg-white rounded-[20px] shadow-lg p-4 z-10 top-[70px] left-0">
                                                    {maintenanceOptions.map((option, index) => (
                                                        <p
                                                            key={index}
                                                            className="cursor-pointer py-2 hover:bg-gray-100"
                                                            onClick={() => handleMaintenanceSelect(option)}
                                                        >
                                                            {option}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
                                    <div className="flex items-center gap-2 ml-4 relative">
                                        <div className="relative bg-white rounded-[20px] w-[324px] h-[67px] flex items-center px-4">
                                            <p>{solicitudData.taller || "Selecciona un taller"}</p>
                                            <span
                                                className="text-gray-500 cursor-pointer absolute right-4"
                                                onClick={() => setShowWorkshopDropdown(!showWorkshopDropdown)}
                                            >▼</span>
                                            {showWorkshopDropdown && (
                                                <div className="absolute w-[266px] bg-white rounded-[20px] shadow-lg p-4 z-10 top-[70px] left-0">
                                                    {workshopOptions.map((option, index) => (
                                                        <p
                                                            key={index}
                                                            className="cursor-pointer py-2 hover:bg-gray-100"
                                                            onClick={() => handleWorkshopSelect(option)}
                                                        >
                                                            {option}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[3px] bg-gray-200 w-[460px] mt-2"></div>
                            </div>
                        </div>
                    </div>
                </MainCard>
            </div>
        </div>
    );
};

export default SolicitudDetailPage; 