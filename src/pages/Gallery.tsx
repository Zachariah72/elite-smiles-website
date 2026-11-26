import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ContentStatus, imageFor } from "@/features/platform/Shared";
import { useContent } from "@/features/platform/data";
import athena1 from "@/assets/athena-1.jpg";
import athena2 from "@/assets/athena-2.jpg";
import athena3 from "@/assets/athena-3.jpg";
import athena4 from "@/assets/athena-4.jpg";
import athena5 from "@/assets/athena-5.jpg";
import athena6 from "@/assets/athena-6.jpg";
import farm from "@/assets/smart-farm.jpg";

type GalleryImage = { src: string; alt: string; title: string; category: string };

const authenticImages: GalleryImage[] = [
  { src: athena2, alt: "Mabawa volunteers engaging with learners at Athena School in Thika", title: "Athena School outreach", category: "Outreach" },
  { src: athena1, alt: "Mabawa volunteers supporting learners during the Athena School outreach", title: "Community health outreach", category: "Outreach" },
  { src: athena3, alt: "Mabawa team with Marvel Five Investments at Athena School", title: "Working together at Athena School", category: "Partnerships" },
  { src: athena4, alt: "A Mabawa volunteer speaking with a learner during outreach", title: "Community conversation", category: "Outreach" },
  { src: athena5, alt: "A learner receiving menstrual health supplies during the Athena School outreach", title: "Menstrual health support", category: "Outreach" },
  { src: athena6, alt: "Mabawa volunteers sorting donations before distribution at Athena School", title: "Preparing outreach supplies", category: "Outreach" },
  { src: farm, alt: "Farm site at Ruaka for the Integrated Smart Farm project under construction", title: "Integrated Smart Farm site", category: "Projects" },
];

const Gallery = () => {
  const query = useContent("impact_story");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const images = useMemo(() => {
    const published = (query.data ?? []).flatMap((item) => {
      const media = [item.image_url, ...(Array.isArray(item.gallery) ? item.gallery : [])].filter((value): value is string => typeof value === "string" && !!value);
      return media.map((src, index) => ({ src: imageFor({ ...item, image_url: src }), alt: `${item.title}, approved photograph ${index + 1}`, title: item.title, category: item.category || "Community" }));
    });
    const combined = [...authenticImages, ...published].filter((image, index, list) => list.findIndex((candidate) => candidate.src === image.src) === index);
    return category === "All" ? combined : combined.filter((image) => image.category === category);
  }, [category, query.data]);
  const categories = ["All", ...Array.from(new Set([...authenticImages.map((image) => image.category), ...(query.data ?? []).map((item) => item.category).filter(Boolean)]))];

  return (
    <Layout>
      <PageHeader eyebrow="Mabawa in action" title="Community Gallery" subtitle="Authentic photographs from Mabawa outreach and project sites, alongside approved, published impact records." />
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <ContentStatus loading={query.isLoading} error={query.error} />
          <div role="group" aria-label="Filter gallery by category" className="mb-8 flex flex-wrap gap-2">
            {categories.map((item) => <Button key={item} type="button" variant={category === item ? "default" : "outline"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image) => (
              <figure key={`${image.src}-${image.title}`} className="min-w-0">
                <Button variant="ghost" className="group h-auto w-full overflow-hidden rounded-none p-0" onClick={() => setSelected(image)} aria-label={`Open photo: ${image.title}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </Button>
                <figcaption className="mt-2 text-sm font-medium text-foreground">{image.title}</figcaption>
                <p className="text-xs text-muted-foreground">{image.category}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <Dialog open={!!selected} onOpenChange={(value) => { if (!value) setSelected(null); }}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto">
          <DialogTitle>{selected?.title}</DialogTitle>
          <DialogDescription>{selected?.alt}</DialogDescription>
          {selected && <img src={selected.src} alt={selected.alt} className="max-h-[75vh] w-full object-contain" />}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;