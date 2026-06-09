export default function SectionHeading({ title, italicWord, subtitle }) {
  /* Title in bold sans-serif; only the accent word uses Playfair Display italic + gradient. */
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}{" "}
        {italicWord && (
          <span className="gradient-text">
            {italicWord}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-muted text-sm md:text-base max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
      <span className="section-title-line" />
    </div>
  );
}

