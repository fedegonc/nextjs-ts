export default function ProductDetails({ params }: { params: { id: string } }) {
  const productId = params.id;

  // Puedes obtener los detalles reales del producto desde una API o base de datos aquí.
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
