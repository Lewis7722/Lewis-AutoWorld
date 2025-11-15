import { Link } from "react-router-dom";
import Navigation from '../layout/Navigation';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero-car.jpg" 
          alt="Luxury Car Background" 
          className="object-cover w-full h-full"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header/Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 bg-transparent">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-extrabold text-white">LewisAutoWorld</div>
            <div className="text-sm text-gray-300">Drive Luxury. Drive Passion.</div>
          </div>

          <Navigation />

          <div className="items-center hidden gap-3 md:flex">
            <Link to="/login">
              <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-gray-900">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-gray-900">
                Sign Up
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary">Contact Sales</Button>
            </Link>
          </div>

          {/* mobile menu button (visible on small screens) */}
          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2 text-white border border-white rounded-md">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 text-center text-white mt-16">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              Lewis Auto World
            </h1>
            <h2 className="text-3xl font-light text-gray-200 lg:text-4xl">
              Simplify Your Drive
            </h2>
            <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300 lg:text-2xl">
              From luxury sedans to premium SUVs. Experience automotive excellence with our curated collection of high-end vehicles.
            </p>
          </div>
          
          {/* Single CTA Button */}
          <div className="flex justify-center pt-8">
            <Link 
              to="/login" 
              className="px-12 py-4 text-lg font-semibold text-center text-white transition-all duration-300 transform rounded-lg bg-primary hover:bg-primary-dark hover:scale-105 hover:shadow-2xl"
            >
              Get Started
            </Link>
          </div>

          {/* Feature Points */}
          <div className="grid max-w-2xl grid-cols-1 gap-6 pt-12 mx-auto sm:grid-cols-2">
            <div className="flex items-center justify-center p-4 space-x-3 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary/20">
                <span className="text-lg text-white">🚗</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white">Premium Selection</h4>
                <p className="text-sm text-gray-300">Curated luxury vehicles</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 space-x-3 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary/20">
                <span className="text-lg text-white">⚡</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white">Expert Assistance</h4>
                <p className="text-sm text-gray-300">Professional sales team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-10 transform -translate-x-1/2 bottom-8 left-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}