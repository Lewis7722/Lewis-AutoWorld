export default function Features() {
  const newArrivals = [
    {
      name: "Range Rover Vogue",
      price: "$120,000",
      image: "/src/assets/images/car3.jpg",
      description: "Executive luxury SUV"
    },
    {
      name: "BMW 7 Series",
      price: "$95,000",
      image: "/src/assets/images/BMWX7.jpg",
      description: "Premium driving experience"
    },
    {
      name: "Audi A8",
      price: "$88,000",
      image: "/src/assets/images/AudiQ8.jpg",
      description: "Advanced technology features"
    },
    {
      name: "Tesla E-Power",
      price: "$110,000",
      image: "/src/assets/images/car4.jpg",
      description: "High performance"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">New In Showroom</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Our latest arrivals feature cutting-edge technology and premium craftsmanship.
          </p>
          <button className="px-8 py-3 mt-6 text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark">
            Check Inventory
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((car, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="p-4 transition-all duration-300 bg-gray-50 rounded-xl group-hover:shadow-lg">
                <div className="mb-3 overflow-hidden bg-gray-200 rounded-lg aspect-w-16 aspect-h-12">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="object-cover w-full h-40 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">{car.name}</h3>
                <p className="mb-2 text-sm text-gray-600">{car.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{car.price}</span>
                  <button className="text-gray-400 transition-colors hover:text-primary">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}