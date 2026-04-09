import Hero from '@/components/ui/Hero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutStory from '@/components/about/AboutStory';
import AboutMission from '@/components/about/AboutMission';
import WhyChooseUs from '@/components/home/WhyChooseUs';
// import AboutProcess from '@/components/about/AboutProcess';
import AboutTeam from '@/components/about/AboutTeam';
import AboutStats from '@/components/about/AboutStats';
import ScrollReveal from '@/components/shared/ScrollReveal';

import QuoteCTA from '@/components/home/QuoteCTA';

export default function AboutPage() {
  return (
    <div className="min-h-[70vh]">
      <Hero 
        eyebrow="Our Legacy"
        title={<>Crafting Elegance for Every Window</>}
        description="Since 2005, GMB has been at the forefront of premium window treatments, combining traditional artistry with modern innovation."
        accentColor="#1F2E5A"
      />
      <ScrollReveal><AboutIntro /></ScrollReveal>
      {/* <ScrollReveal><AboutStory /></ScrollReveal> */}
      <ScrollReveal><AboutStats /></ScrollReveal>
      {/* <ScrollReveal><AboutMission /></ScrollReveal> */}
      <ScrollReveal><AboutTeam /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      <ScrollReveal><QuoteCTA /></ScrollReveal>
    </div>
  );
}
