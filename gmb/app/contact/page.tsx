'use client';

import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ScrollReveal from '@/components/shared/ScrollReveal';


export default function ContactPage() {
  return (
    <div className="min-h-[70vh]">
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

    </div>
  );
}
