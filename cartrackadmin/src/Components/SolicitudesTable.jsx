import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

const SolicitudesTable = ({ data, currentTab }) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        No hay solicitudes disponibles
      </div>
    );
  }

  const handleClick = (item) => {
    if (currentTab === 'pendientes') {
      navigate(`/solicitud/pendiente/${item.id}`);
    } else if (currentTab === 'activos') {
      navigate(`/solicitud/activos/${item.id}`);
    } else {
      navigate(`/solicitud/${currentTab}/${item.id}`);
    }
  };

  return (
    <div className="w-full lg:w-[130%] transition-all duration-300">
      <div className="grid grid-cols-4 gap-4 text-[#0500C6] font-semibold mb-4">
        <div>Cliente</div>
        <div>Tipo</div>
        <div>Vehículo</div>
        <div className="text-right">Acción</div>
      </div>
      {data.map((item) => (
        <div 
          key={item.id} 
          className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200"
        >
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">{item.cliente}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">{item.tipo}</div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">{item.vehiculo}</div>
          <div className="text-right">
            <Eye 
              className="inline-block cursor-pointer text-[#0500C6]" 
              onClick={() => handleClick(item)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolicitudesTable; 