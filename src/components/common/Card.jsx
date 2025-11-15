export default function Card({ img, title, children }) {
  return (
    <article className="overflow-hidden bg-white rounded-lg shadow-sm">
      {img && <img src={img} alt={title} className="object-cover w-full h-48" loading="lazy" />}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-neutralDark">{title}</h3>
        <div className="text-sm text-neutralDark/80">{children}</div>
      </div>
    </article>
  )
}