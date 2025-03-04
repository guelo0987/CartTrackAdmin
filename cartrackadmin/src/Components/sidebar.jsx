import { useState } from 'react';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { title: 'Clientes', path: '/' },
    { title: 'Solicitudes', path: '/solicitudes' },
    { title: 'Servicios', path: '/servicios' },
    { title: 'Historial', path: '/historial' },
    { title: 'Talleres', path: '/talleres' },
    { title: 'Estadística', path: '/estadistica' },
  ];

  return (
    <div className={`min-h-screen bg-[#0500C6] text-white rounded-r-[20px] transition-all duration-300 ${
      isOpen ? 'w-[285px] lg:w-[260px] md:w-[220px] sm:w-[180px] xs:w-[160px]' : 'w-16 sm:w-14 xs:w-12'
    }`}>
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          className="absolute right-[-12px] top-9 bg-white rounded-full p-2 hover:bg-gray-200 md:right-[-10px] sm:right-[-8px] sm:p-1.5 xs:p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''} sm:w-3 sm:h-3 xs:w-2 xs:h-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center pt-12 pb-8 xs:pt-8 xs:pb-6">
          <img
            src="/logo_sidebar.png"
            alt="Logo"
            className={`transition-all duration-300 ${
              isOpen ? 'w-32 md:w-24 sm:w-20 xs:w-16' : 'w-10 sm:w-8 xs:w-6'
            }`}
          />
        </div>

        <Separator className="mx-6 my-20 md:my-16 sm:my-12 xs:my-8" />

        {/* Menu Items */}
        <nav className="flex flex-col items-center gap-6 md:gap-10 sm:gap-8 xs:gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`text-white text-xl md:text-xl sm:text-base xs:text-sm font-semibold w-full text-center ${!isOpen && 'px-2 xs:px-1'}`}
            >
              {isOpen ? item.title : item.title[0]}
            </Link>
          ))}
        </nav>

        <Separator className="mx-6 my-32 md:my-24 sm:my-16 xs:my-12" />

        {/* User Profile */}
        <div className="flex items-center gap-3 px-8 py-4 mb-8 md:px-9 sm:px-4 xs:px-2 xs:py-2 xs:mb-4">
          <Avatar className="h-10 w-10 md:h-8 md:w-8 sm:h-6 sm:w-6 xs:h-5 xs:w-5 bg-white">
            <AvatarFallback>
              <User className="h-6 w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 xs:h-3 xs:w-3 text-[#0500C6]" />
            </AvatarFallback>
          </Avatar>
          {isOpen && <span className="text-white text-xl md:text-lg sm:text-base xs:text-sm font-semibold">Eliot Ortiz</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
