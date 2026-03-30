import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import BlogPosts from "@/components/BlogPosts";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <BentoGrid />
        <SectionDivider />
        <BlogPosts />
        <SectionDivider />
        <ExperienceTimeline />
        <SectionDivider />
        <TechMarquee />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
