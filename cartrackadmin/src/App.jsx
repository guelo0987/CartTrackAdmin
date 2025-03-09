import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientePage from './Pages/ClientePage';
import ClientActiveDetailPage from './Pages/ClientActiveDetailPage';
import ClientPendingDetailPage from './Pages/ClientPendingDetailPage';
import SolicitudesPage from './Pages/SolicitudesPage';
import SolicitudDetailPage from './Pages/SolicitudDetailPage';
import SolicitudActivaDetailPage from './Pages/SolicitudActivaDetailPage';
import ServiciosPage from './Pages/ServiciosPage';
import HistorialPage from './Pages/HistorialPage';
import TalleresPage from './Pages/TalleresPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientePage />} />
        <Route path="/cliente/activo/:id" element={<ClientActiveDetailPage />} />
        <Route path="/cliente/pendiente/:id" element={<ClientPendingDetailPage />} />
        <Route path="/solicitudes" element={<SolicitudesPage />} />
        <Route path="/solicitud/activos/:id" element={<SolicitudActivaDetailPage />} />
        <Route path="/solicitud/pendiente/:id" element={<SolicitudDetailPage />} />
        <Route path="/solicitud/:type/:id" element={<SolicitudDetailPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/historial" element={<HistorialPage />} />
        <Route path="/talleres" element={<TalleresPage />} />
        {/* Add other client type routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
