"use client";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { CategoryExplorer } from "@/components/home/CategoryExplorer";
import { Stepper } from "@/components/home/Stepper";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ClientFlipGrid } from "@/components/home/ClientFlipGrid";
import { ReviewMarquee } from "@/components/home/ReviewMarquee";
import { ITRPromo } from "@/components/home/ITRPromo";
import { ContactCTA } from "@/components/home/ContactCTA";
import { SectionHead } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { OfficeMap } from "@/components/shared/OfficeMap";
import { HOME_CATEGORIES } from "@/data/categories";
import { FAQ } from "@/data/faq";

export default function HomePage() {
  const router = useRouter();
  const goServices = () => router.push("/services");

  return (
    <div style={{ background: "var(--paper)" }}>
      <ChatWidget />
      <NavBar active="home" />

      <Hero />
      <About />

      <section style={{ padding: "clamp(48px, 8vw, 90px) var(--container-pad)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--navy-700)", background: "var(--navy-050)", display: "inline-flex", padding: "6px 16px", borderRadius: "var(--radius-pill)" }}>
              Modules
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)", margin: "16px 0 0" }}>Service Categories</h2>
          </div>
          <Button variant="ghost" onClick={goServices}>View all 94 services</Button>
        </div>
        <CategoryExplorer categories={HOME_CATEGORIES} onSelect={goServices} />
      </section>

      <section style={{ position: "relative", background: "var(--paper-alt)", padding: "clamp(48px, 8vw, 90px) var(--container-pad)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHead eyebrow="Simple Process" title="How It Works" sub="Three steps between not compliant and fully covered — hover or tap to explore." />
          <Stepper />
        </div>
      </section>

      <WhyChooseUs />

      <section style={{ padding: "clamp(44px, 8vw, 80px) var(--container-pad) clamp(48px, 8vw, 90px)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <SectionHead eyebrow="And Many More" title="Our Clients" sub="As a client, it matters who handles your compliance — here's who trusts us. Watch the cards flip, hover to hold." />
          <ClientFlipGrid />
        </div>
      </section>

      <section id="testimonials" style={{ background: "var(--navy-050)", padding: "clamp(48px, 8vw, 90px) 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-pad)" }}>
          <SectionHead eyebrow="Client Stories" title="What Our Clients Say" sub="★★★★★ Rated 4.9/5 on Google Reviews — hover to pause and read." />
        </div>
        <ReviewMarquee />
      </section>

      <section style={{ padding: "clamp(48px, 8vw, 90px) var(--container-pad)", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHead eyebrow="Pan-India Compliance Services" title="Our Office Locations" sub="Two home offices in Kolkata & Bhagalpur, delivering to 20+ metros — click a pin to explore." />
        <OfficeMap />
      </section>

      <section style={{ background: "var(--white)", padding: "clamp(48px, 8vw, 90px) var(--container-pad)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHead eyebrow="Quick Answers" title="Frequently Asked Questions" />
          <Accordion defaultOpenIndex={0} items={FAQ} />
        </div>
      </section>

      <ITRPromo />

      <ContactCTA />

      <Footer />
    </div>
  );
}
