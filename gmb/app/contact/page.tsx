'use client';

import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Hero from '@/components/ui/Hero';


export default function ContactPage() {
  return (
    <div className="min-h-[70vh]">
      <Hero 
        eyebrow="Inquiry"
        title={<>Get in <span className="gradient-text">Touch</span></>}
        description="Whether you have a question about our products or want to schedule a professional measurement, our team is ready to assist you."
        accentColor="#3d9e41"
      />
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
