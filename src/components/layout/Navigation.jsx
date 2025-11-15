import { Link } from "react-router-dom";

export default function Navigation(){
  return (
    <nav className="items-center hidden gap-8 text-sm lg:flex">
      <Link to="/" className="text-neutralDark hover:text-primary">Home</Link>
      <Link to="/cars" className="text-neutralDark hover:text-primary">Cars</Link>
      <Link to="/services" className="text-neutralDark hover:text-primary">Services</Link>
      <Link to="/contact" className="text-neutralDark hover:text-primary">Contact</Link>
    </nav>
  );
}