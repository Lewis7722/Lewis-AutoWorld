export default function Stats() {
  const stats = [
    {
      number: "50+",
      label: "Premium Vehicles",
      icon: "🚗",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
      number: "15+",
      label: "Brand Partners",
      icon: "🏢",
      gradient: "from-green-500/10 to-green-600/5"
    },
    {
      number: "1000+",
      label: "Happy Customers",
      icon: "😊",
      gradient: "from-purple-500/10 to-purple-600/5"
    },
    {
      number: "24/7",
      label: "Support",
      icon: "🛡️",
      gradient: "from-orange-500/10 to-orange-600/5"
    }
  ];

  return (
    <section className="relative py-8 bg-transparent"> {/* Even less padding */}
      {/* Minimal Floating */}
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="p-6 transform -translate-y-8 bg-white border border-gray-100 shadow-md rounded-xl lg:p-8"> {/* Minimal negative translate */}
          
          <div className="mb-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              The Best Automotive Dealer Of Your Choice
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Lewis Auto World represents the pinnacle of automotive excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-br ${stat.gradient} rounded-lg p-4 border border-gray-100`}>
                  <div className="mb-2 text-2xl">{stat.icon}</div>
                  <div className="mb-1 text-xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs font-medium text-gray-700">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Spacer */}
      <div className="h-8 bg-transparent"></div>
    </section>
  );
}