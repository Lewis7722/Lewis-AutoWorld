import { Link } from "react-router-dom";

export default function Navigation(){
  return (
    <nav className="items-center hidden gap-8 text-sm lg:flex">
      <Link to="/" className="text-white transition-colors hover:text-primary">Home</Link>
      <Link to="/cars" className="text-white transition-colors hover:text-primary">Cars</Link>
      <Link to="/services" className="text-white transition-colors hover:text-primary">Services</Link>
      <Link to="/contact" className="text-white transition-colors hover:text-primary">Contact</Link>
    </nav>
  );
}