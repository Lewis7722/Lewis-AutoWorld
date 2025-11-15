export default function Stats(){
  const items = [
    { label: "Models Available", value: "120+"},
    { label: "Happy Customers", value: "8,400+"},
    { label: "Awards Won", value: "15"}
  ];
  return (
    <section className="py-10 bg-neutralLight">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-3 gap-6 text-center">
        {items.map(i => (
          <div key={i.label} className="p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-primary">{i.value}</div>
            <div className="text-sm text-neutralDark">{i.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}