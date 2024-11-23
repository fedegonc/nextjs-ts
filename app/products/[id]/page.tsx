interface ProductPageProps {
  params: {
    id: string; // El parámetro dinámico de la URL
  };
}

export default function ProductDetails({ params }: ProductPageProps) {
  const productId = params.id;

  // Simular detalles del producto
  const product = {
    id: productId,
    name: `Producto ${productId}`,
    description: `Esta es la descripción del producto ${productId}.`,
    price: `$${20 * Number(productId)}.00`,
    image: `/product${productId}.jpg`,
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
