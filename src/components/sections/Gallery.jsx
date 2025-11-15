import Card from "../common/Card";

const cars = [
  { title: "Sport GT", img: "/src/assets/images/car1.jpg" },
  { title: "Sedan", img: "/src/assets/images/car2.jpg" },
  { title: "Family SUV", img: "/src/assets/images/car3.jpg" },
  { title: "Electric E", img: "/src/assets/images/car4.jpg" }
];

export default function Gallery(){
  return (
    <section id="cars" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="mb-6 text-xl font-bold">Featured Models</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cars.map(c => <Card key={c.title} img={c.img} title={c.title} />)}
        </div>
      </div>
    </section>
  );
}