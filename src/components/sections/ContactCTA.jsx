export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">What People Are Saying About Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Testimonial 1 */}
            <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
              <div className="mb-4 text-2xl text-yellow-400">★★★★★</div>
              <p className="mb-4 leading-relaxed text-gray-700">
                "Exceptional service and an incredible selection of luxury vehicles. The team at Lewis Auto World made my car buying experience seamless."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Mercedes-Benz Owner</div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
              <div className="mb-4 text-2xl text-yellow-400">★★★★★</div>
              <p className="mb-4 leading-relaxed text-gray-700">
                "Professional, knowledgeable, and truly cares about finding the right vehicle for their customers. Highly recommended!"
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">BMW 7 Series Owner</div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl">
              <div className="mb-4 text-2xl text-yellow-400">★★★★★</div>
              <p className="mb-4 leading-relaxed text-gray-700">
                "The attention to detail and premium service exceeded my expectations. This is how luxury car buying should be."
              </p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">Porsche 911 Owner</div>
            </div>
          </div>
        </div>

        {/* Financing CTA Section */}
        <div className="p-8 text-center text-white bg-gradient-to-r from-primary to-primary-dark rounded-2xl">
          <h2 className="mb-4 text-3xl font-bold">Get Special Financing Offers</h2>
          <p className="mb-6 text-xl text-primary-100">
            Limited time offers on select luxury models with premium financing options.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 font-semibold transition-colors bg-white rounded-lg text-primary hover:bg-gray-100">
              View Financing Options
            </button>
            <button className="px-8 py-3 font-semibold text-white transition-colors border-2 border-white rounded-lg hover:bg-white hover:text-primary">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}