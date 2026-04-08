import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ProductCategories from '@/components/home/ProductCategories';
import RecentWorks from '@/components/home/RecentWorks';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import BlogPreview from '@/components/home/BlogPreview';
import QuoteCTA from '@/components/home/QuoteCTA';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-[70vh]">
      <Navbar />
      <Hero />
      <ScrollReveal><ProductCategories /></ScrollReveal>
      
      <ScrollReveal><RecentWorks /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><WhyChooseUs /></ScrollReveal>
      
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal><QuoteCTA /></ScrollReveal>
      <Footer />
    </main>
  );
}
