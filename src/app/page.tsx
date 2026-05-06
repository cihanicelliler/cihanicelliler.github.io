import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import BlogPosts from "@/components/BlogPosts";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <BlogPosts />
        <ExperienceTimeline />
        <TechMarquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
