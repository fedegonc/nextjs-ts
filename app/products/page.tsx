export default function Products() {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción breve del producto 1.",
      price: "$20.00",
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción breve del producto 2.",
      price: "$30.00",
      image: "/product2.jpg",
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción breve del producto 3.",
      price: "$40.00",
      image: "/product3.jpg",
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Descripción breve del producto 4.",
      price: "$50.00",
      image: "/product4.jpg",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-semibold mt-2">{product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Comprar
              </button>
            </div>
   
