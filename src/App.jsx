import { Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features"; // New Arrivals
import WhyChooseUs from "./components/sections/WhyChooseUs"; // Add this import
import Gallery from "./components/sections/Gallery";
import ContactCTA from "./components/sections/ContactCTA";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

// Landing Page Component
function LandingPage() {
  return (
    <>
      <Hero />
      <main>
        <Stats />
        <Features /> {/* New Arrivals */}
        <WhyChooseUs /> {/* Add this section */}
        <Gallery />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}