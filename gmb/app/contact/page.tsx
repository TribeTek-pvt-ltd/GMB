'use client';

import Navbar from '@/components/Navbar';
import ContactHero from '@/components/ContactHero';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';

import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-[70vh]">
      <Navbar />
      <ContactHero />
      <ScrollReveal delay={0.1}>
        <div className="pt-8 md:pt-12 pb-4">
          <ContactForm />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="pt-12 md:pt-16 pb-12">
          <ContactInfo />
        </div>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
