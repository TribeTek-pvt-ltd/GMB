import Hero from '@/components/home/Hero';
import ProductCategories from '@/components/home/ProductCategories';
import HomeGallery from '@/components/home/HomeGallery';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import BlogPreview from '@/components/home/BlogPreview';
import QuoteCTA from '@/components/home/QuoteCTA';
import ScrollReveal from '@/components/shared/ScrollReveal';
import RecentWorks from '@/components/home/RecentWorks';

export default function Home() {
  return (
    <div className="min-h-[70vh]">
      <Hero />
      <ScrollReveal><ProductCategories /></ScrollReveal>

      <RecentWorks />
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>

      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal><QuoteCTA /></ScrollReveal>
    </div>
  );
}
