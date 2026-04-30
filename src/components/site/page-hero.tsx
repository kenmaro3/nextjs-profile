type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="page-hero section">
      <div className="container">
        <div className="hero-copy compact">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="section-copy">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
