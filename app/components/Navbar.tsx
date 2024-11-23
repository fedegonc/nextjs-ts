import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter(); // Para detectar la ruta activa

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-around">
      <Link
        href="/"
        className={`${
          router.pathname === "/" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Inicio
      </Link>
      <Link
        href="/products"
        className={`${
          router.pathname === "/products" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Productos
      </Link>
      <Link
        href="/about"
        className={`${
          router.pathname === "/about" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Nosotros
      </Link>
      <Link
        href="/contact"
        className={`${
          router.pathname === "/contact" ? "text-yellow-400" : "text-white"
        } hover:text-yellow-400`}
      >
        Contacto
      </Link>
    </nav>
  );
};

export default Navbar;
