import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '../config/routes';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detectar scroll para mudar o layout do menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/', active: false },
    { name: 'Segurança', path: '/seguranca', active: false },
    { name: 'Produtos', path: '/produtos', active: false },
    { name: 'Sobre nós', path: '/sobre', active: false },
    { name: 'Contato', path: '/contato', active: false },
  ];

  // Função para verificar se um item está ativo
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Header/Navbar para desktop */}
      <header className={`hidden md:flex items-center justify-between transition-all duration-500 ease-in-out fixed top-0 left-1/2 transform -translate-x-1/2 z-50 ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-md px-8 py-3 max-w-6xl mx-auto rounded-2xl shadow-lg top-3' 
          : 'w-full py-4 max-w-7xl mx-auto'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <div className={`rounded-lg flex items-center justify-center mr-4 transition-all duration-500 ${
            isScrolled ? 'w-12 h-12' : 'w-10 h-10'
          }`}>
            <img 
              src={isScrolled ? "/icon-menu-branco.avif" : "/icon-menu.avif"} 
              alt="Logo SplitCare" 
              className={`object-contain transition-all duration-500 ${
                isScrolled ? 'w-12 h-12' : 'w-10 h-10'
              }`}
            />
          </div>
        </div>
        

        <div className="flex items-center gap-4">

          {/* Menu de navegação centralizado */}
          <nav className="flex items-center space-x-8">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative transition-all duration-300 ${
                    isScrolled 
                      ? 'text-white hover:text-gray-200 text-sm' 
                      : active 
                        ? 'text-[var(--color-primary)]' 
                        : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {active && (
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      isScrolled ? 'bg-white' : 'bg-[var(--color-primary)]'
                    }`}></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Botão de Login */}
          <div className="flex items-center">
            <Link to={ROUTES.login} className={`transition-all duration-300 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-600)] ${
              isScrolled ? 'px-4 py-2 rounded-lg text-sm' : 'px-6 py-2 rounded-lg'
            }`}>
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Header/Navbar para mobile */}
      <header className={`md:hidden flex items-center justify-between transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-md px-6 py-2 mx-4 mt-2 rounded-2xl shadow-lg top-3' 
          : 'bg-gray-50 w-full px-4 py-3'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <div className={`rounded-lg flex items-center justify-center mr-3 transition-all duration-500 ${
            isScrolled ? 'w-12 h-12' : 'w-10 h-10'
          }`}>
            <img 
              src={isScrolled ? "/icon-menu-branco.avif" : "/icon-menu.avif"} 
              alt="Logo SplitCare" 
              className={`object-contain transition-all duration-500 ${
                isScrolled ? 'w-12 h-12' : 'w-8 h-8'
              }`}
            />
          </div>
        </div>

        {/* Botão de Login e Menu Hambúrguer lado a lado */}
        <div className="flex items-center gap-2">
          <button className={`transition-all duration-300 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-600)] ${
            isScrolled ? 'px-4 py-2 rounded-lg text-sm' : 'px-4 py-2 rounded-lg text-sm'
          }`}>
            Login
          </button>
          <button
            onClick={toggleMenu}
            className={`p-2 transition-all duration-300 ${
              isScrolled 
                ? 'text-white hover:text-gray-200' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {isMenuOpen ? <X size={isScrolled ? 20 : 24} /> : <Menu size={isScrolled ? 20 : 24} />}
          </button>
        </div>
      </header>

      {/* Menu mobile dropdown */}
      {isMenuOpen && (
        <div className={`md:hidden border-b border-gray-200 shadow-lg transition-all duration-500 fixed left-0 right-0 z-40 ${
          isScrolled 
            ? 'bg-black/50 backdrop-blur-md rounded-2xl mt-16 mx-4 top-6' 
            : 'bg-white mt-16 top-0'
        }`}>
          <nav className="px-4 py-2">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                    isScrolled
                      ? active 
                        ? 'text-white bg-white/20' 
                        : 'text-white hover:text-gray-200 hover:bg-white/10'
                      : active 
                        ? 'text-[var(--color-primary)] bg-gray-50' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {active && (
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isScrolled ? 'bg-white' : 'bg-[var(--color-primary)]'
                      }`}></div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
