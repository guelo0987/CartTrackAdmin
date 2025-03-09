import { useNavigate } from 'react-router-dom';

const ClientTable = ({ data, currentTab }) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        No hay datos disponibles
      </div>
    );
  }

  const handleRowClick = (item) => {
    switch(currentTab) {
      case 'pendientes':
        navigate(`/cliente/pendiente/${item.id}`);
        break;
      case 'activos':
        navigate(`/cliente/activo/${item.id}`);
        break;
      case 'suspendidos':
        navigate(`/cliente/suspendido/${item.id}`);
        break;
      case 'cancelados':
        navigate(`/cliente/cancelado/${item.id}`);
        break;
      default:
        navigate(`/cliente/activo/${item.id}`);
    }
  };

  return (
    <div className="mt-8">
      {/* Table Headers */}
      <div className="flex mb-4 px-4 sticky top-0 bg-[##F9FBFC] py-2 z-10">
        <div className="w-1/3">
          <h3 className="text-[#0500C6] font-semibold text-sm">Nombre</h3>
        </div>
        <div className="w-2/3">
          <h3 className="text-[#0500C6] font-semibold text-sm">Vehículo</h3>
        </div>
      </div>

      {/* Table Content with Scroll */}
      <div className="overflow-y-auto max-h-[calc(100vh-350px)]">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center px-4 py-3 border-b-2 border-[rgba(29,26,124,0.1)] hover:bg-gray-50 cursor-pointer"
            onClick={() => handleRowClick(item)}
          >
            <div className="w-1/3">
              <p className="text-gray-800 font-medium">{item.nombre}</p>
            </div>
            <div className="w-2/3 flex items-center gap-2">
              <p className="text-gray-800">{item.vehiculo}</p>
              {item.notifications && (
                <span className="text-[#0500C6] text-sm">{`(+${item.notifications})`}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTable;
