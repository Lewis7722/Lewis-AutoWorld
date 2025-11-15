import Button from "../common/Button";

export default function ContactCTA(){
  return (
    <section id="contact" className="py-12 text-white bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-2xl font-bold">Ready for a test drive?</h4>
          <p className="text-sm">Book now — we’ll prepare everything for your visit.</p>
        </div>
        <div className="mt-4 md:mt-0"><Button variant="secondary">Book a Test Drive</Button></div>
      </div>
    </section>
  );
}