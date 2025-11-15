export default function Footer() {
  return (
    <footer className="bg-neutralDark text-neutralLight">
      <div className="max-w-[1200px] mx-auto px-6 py-8 grid md:flex md:items-center md:justify-between gap-6">
        <div>
          <div className="text-lg font-bold">LewisAutoWorld</div>
          <div className="text-sm">Premium cars, trusted service.</div>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} LewisAutoWorld — All rights reserved
        </div>
      </div>
    </footer>
  );
}