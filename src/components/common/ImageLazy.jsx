export default function ImageLazy({ src, alt, className = "" }) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}