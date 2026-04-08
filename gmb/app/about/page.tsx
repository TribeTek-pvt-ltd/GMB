import Navbar from '@/components/layout/Navbar';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import WhyChooseUs from '@/components/home/WhyChooseUs';
// import AboutProcess from '@/components/about/AboutProcess';
import AboutTeam from '@/components/about/AboutTeam';
import AboutStats from '@/components/about/AboutStats';
import ScrollReveal from '@/components/shared/ScrollReveal';

import QuoteCTA from '@/components/home/QuoteCTA';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-[70vh]">
      <Navbar />
      <AboutHero />
      <ScrollReveal><AboutIntro /></ScrollReveal>
      {/* <ScrollReveal><AboutStory /></ScrollReveal> */}
      <ScrollReveal><AboutStats /></ScrollReveal>
      {/* <ScrollReveal><AboutMission /></ScrollReveal> */}
      <ScrollReveal><AboutTeam /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><QuoteCTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
