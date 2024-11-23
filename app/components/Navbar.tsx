"use client"; // Esto convierte el componente en una Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Usa next/navigation

const Navbar = () => {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-around">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Inicio
      </Link>
      <Link
        href="/products"
        className={`${
          pathname === "/products" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Productos
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Nosotros
      </Link>
      <Link
        href="/contact"
        className={`${
          pathname === "/contact" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
