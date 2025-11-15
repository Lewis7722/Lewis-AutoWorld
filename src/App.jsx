import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Features from "./components/sections/Features";
import Gallery from "./components/sections/Gallery";
import ContactCTA from "./components/sections/ContactCTA";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"; // Add this import
import Contact from "./pages/Contact"; // Add this import


// Landing Page Component
function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Features />
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
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route */}
        <Route path="/contact" element={<Contact />} /> {/* Add this line */}

      </Routes>
    </>
  );
}