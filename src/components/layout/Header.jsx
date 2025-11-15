import { Link } from "react-router-dom";
import Navigation from './Navigation';
import Button from '../common/Button';

export default function Header(){
  return (
    <header className="bg-neutralLight">
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-primary">LewisAutoWorld</div>
          <div className="text-sm text-neutralDark">Drive Luxury. Drive Passion.</div>
        </Link>

        <Navigation />

        <div className="items-center hidden gap-3 md:flex">
          <Link to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline">Sign Up</Button>
          </Link>
          <Link to ="/contact">
          <Button variant="primary">Contact Sales</Button>
          </Link>
        </div>

        {/* mobile menu button (visible on small screens) */}
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 border rounded-md">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}