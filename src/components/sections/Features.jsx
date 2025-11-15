import Card from "../common/Card";

export default function Features(){
  return (
    <section className="py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="mb-6 text-2xl font-bold text-neutralDark">Why LewisAutoWorld</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Certified Vehicles" img="/src/assets/images/card1.jpg">Every car inspected by experts.</Card>
          <Card title="Warranty & Support" img="/src/assets/images/card2.jpg">Comprehensive warranties from trusted makers.</Card>
          <Card title="Trade-in Options" img="/src/assets/images/card3.jpg">Easy trade-ins with fair valuation.</Card>
        </div>
      </div>
    </section>
  );
}