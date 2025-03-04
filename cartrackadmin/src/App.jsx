import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientePage from './Pages/ClientePage';
import ClientActiveDetailPage from './Pages/ClientActiveDetailPage';
import ClientPendingDetailPage from './Pages/ClientPendingDetailPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientePage />} />
        <Route path="/cliente/activo/:id" element={<ClientActiveDetailPage />} />
        <Route path="/cliente/pendiente/:id" element={<ClientPendingDetailPage />} />
        {/* Add other client type routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
