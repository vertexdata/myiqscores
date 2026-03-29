interface WikiImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

const WikiImage = ({ src, alt, caption, className = "" }: WikiImageProps) => (
  <figure className={`my-6 ${className}`}>
    <div className="glass-card rounded-xl overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto max-h-[300px] object-cover"
      />
    </div>
    {caption && (
      <figcaption className="text-xs text-muted-foreground/60 text-center mt-2 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default WikiImage;
