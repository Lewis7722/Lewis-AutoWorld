import Card from "../common/Card";

export default function WhyChooseUs(){
  const features = [
    {
      title: "Certified Vehicles",
      description: "Every car thoroughly inspected by our expert team to ensure premium quality and reliability.",
      image: "/src/assets/images/card1.jpg"
    },
    {
      title: "Warranty & Support", 
      description: "Comprehensive warranties and dedicated support from trusted automotive manufacturers.",
      image: "/src/assets/images/card2.jpg"
    },
    {
      title: "Trade-in Options",
      description: "Streamlined trade-in process with fair market valuations and flexible financing.",
      image: "/src/assets/images/card3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose LewisAutoWorld</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Discover the premium automotive experience that sets us apart from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="cursor-pointer group">
              <div className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl group-hover:shadow-xl">
                <div className="mb-4 overflow-hidden bg-gray-200 aspect-w-16 aspect-h-12 rounded-xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
}