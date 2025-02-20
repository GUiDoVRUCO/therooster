import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="p-4 bg-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">Minha Logo</div>

      {/* Botão Cardápio (Só aparece no mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="text-lg flex items-center space-x-2"
        >
          <span>Cardápio</span>
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu para PC (Desktop) */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-600">Burguer</a>
        <a href="#" className="hover:text-gray-600">Acompanhamentos</a>
        <a href="#" className="hover:text-gray-600">Cervejas</a>
        <a href="#" className="hover:text-gray-600">Bebidas</a>
      </nav>

      {/* Menu Mobile Expansível */}
      {menuAberto && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <a href="#" className="hover:text-gray-600">Burguer</a>
          <a href="#" className="hover:text-gray-600">Acompanhamentos</a>
          <a href="#" className="hover:text-gray-600">Cervejas</a>
          <a href="#" className="hover:text-gray-600">Bebidas</a>
        </div>
      )}
    </header>
  );
}
