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
        <div className="pt-2 md:pt-4 pb-2">
          <ContactForm />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="pt-4 md:pt-8 pb-8">
          <ContactInfo />
        </div>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
