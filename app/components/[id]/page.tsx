"use client";

import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams(); // Obtén el parámetro dinámico "id" de la URL

  // Simulación de datos del producto
  const product = {
    id,
    name: `Producto ${id}`,
    description: `Esta es la descripción del producto ${id}.`,
    price: `$${20 * Number(id)}.00`,
    image: `/product${id}.jpg`,
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-semibold mt-4">{product.price}</p>
    </div>
  );
}
