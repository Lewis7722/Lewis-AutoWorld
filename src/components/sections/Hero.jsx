import heroImg from "../../assets/images/hero-car.jpg";
import Button from "../common/Button";

export default function Hero(){
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:flex lg:items-center lg:gap-10 py-16">
        <div className="lg:w-1/2">
          <h1 className="mb-4 text-5xl font-extrabold text-neutralDark">Drive Luxury. Drive Passion.</h1>
          <p className="mb-6 text-lg text-neutralDark/75">Explore curated vehicles hand-picked for performance, comfort and value.</p>
          <div className="flex gap-3">
            <Button variant="primary">Explore Cars</Button>
            <Button variant="outline">Book Test Drive</Button>
          </div>
        </div>
        <div className="mt-8 lg:w-1/2 lg:mt-0">
          <img src={heroImg} alt="Sleek car" className="object-cover w-full rounded-lg shadow-lg" loading="lazy"/>
        </div>
      </div>
    </section>
  );
}