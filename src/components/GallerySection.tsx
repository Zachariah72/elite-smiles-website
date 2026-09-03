import { motion } from "framer-motion";
import athena1 from "@/assets/athena-1.jpg";
import athena2 from "@/assets/athena-2.jpg";
import athena3 from "@/assets/athena-3.jpg";
import athena4 from "@/assets/athena-4.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";

const images = [
  { src: athena2, alt: "Mabawa Uplift volunteers addressing learners at Athena School, Thika" },
  { src: athena1, alt: "Distributing sanitary towels to learners during the Athena School outreach" },
  { src: athena4, alt: "A volunteer talking with a learner during the endometriosis awareness outreach" },
  { src: athena3, alt: "Team receiving Marvel Girl sanitary towel donations from Marvel Five Investments" },
  { src: g1, alt: "Children playing at school" },
  { src: g2, alt: "Volunteers painting a school" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Gallery</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Moments of Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Highlights from the Athena School Endometriosis Awareness Outreach — 29 April, Thika, Kiambu County — held in
          partnership with Marvel Five Investments Ltd (M5).
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
