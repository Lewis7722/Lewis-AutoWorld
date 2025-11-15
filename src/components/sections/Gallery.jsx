export default function Gallery() {
  const products = [
    { name: "Range Rover Sport", price: "$85,000", image: "/src/assets/images/RangeRoverSport.jpg" },
    { name: "Tesla Model S", price: "$94,000", image: "/src/assets/images/Tesla-Model-S.jpg" },
    { name: "BMW X7", price: "$78,000", image: "/src/assets/images/BMWX7.jpg" },
    { name: "Audi Q8", price: "$72,000", image: "/src/assets/images/AudiQ8.jpg" },
    { name: "Mercedes GLE", price: "$68,000", image: "/src/assets/images/MercedesGLE.jpg" },
    { name: "Porsche Cayenne", price: "$82,000", image: "/src/assets/images/PorscheCayenne.jpg" },
    { name: "Lexus LX", price: "$88,000", image: "/src/assets/images/LexusLX.jpg" },
    { name: "Cadillac Escalade", price: "$79,000", image: "/src/assets/images/CadillacEscalade.jpg" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">All Vehicles</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Discover our complete collection of luxury vehicles, each offering unique features and premium driving experiences.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="overflow-hidden transition-all duration-300 bg-gray-50 rounded-xl group-hover:shadow-xl">
                <div className="bg-gray-200 aspect-w-16 aspect-h-12">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-gray-400">View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 font-semibold text-gray-900 transition-colors border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white">
            Load More Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}