import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Utilisation de la référence pour la navbar

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative px-2 rounded-sm bg-green-600">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl"></div>


        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">

            <i
              className={`bi text-2xl transition-all duration-300 ${
                menuOpen ? "bi-x" : "bi-list"
              }`}
            ></i>
          </button>
        </div>

        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-white">
            Formation
          </a>
          <a href="#" className="text-white">
            Blog
          </a>
          <a href="#" className="text-white">
            Forum
          </a>
          <a href="#" className="text-white">
            S'inscrire
          </a>
          <a href="#" className="text-white">
            Se connecter
          </a>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`lg:hidden transition-all duration-500 transform ${
          menuOpen
            ? "max-h-[400px] opacity-100 visible translate-y-0"
            : "max-h-0 opacity-0 invisible translate-y-10"
        } absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center`}
      >
        <div className="bg-green-600 p-4 rounded-sm  justify-center items-center flex flex-col">
          <NavLink to="/" className="block text-white py-2">
            Formations
          </NavLink>
          <NavLink to="/" className="block text-white py-2"></NavLink>
          <NavLink to="/" className="block text-white py-2">
            Blog
          </NavLink>
          <NavLink to="/" className="block text-white py-2">
            Forum
          </NavLink>

          <NavLink to="/" className="block text-white py-2">
            Se connecter
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
