type Props = { eyebrow?: string; title: string; subtitle?: string };

const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="border-b border-border bg-card py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl border-l-4 border-primary pl-5 md:pl-7">
        {eyebrow && <p className="mb-3 text-sm font-bold text-accent">{eyebrow}</p>}
        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>}
      </div>
    </div>
  </section>
);

export default PageHeader;
