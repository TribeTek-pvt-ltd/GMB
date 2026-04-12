'use client';

import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Hero from '@/components/ui/Hero';


export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Dynamic Hero Section */}
      <Hero
        withGlow
        eyebrow="Direct Connection"
        title={<>Elevate Your<br /><span className="text-[#1756a0] italic font-serif opacity-90">Living Space.</span></>}
        description="Our design consultants are ready to help you navigate our bespoke collections and find the perfect architectural fit for your home."
        accentColor="#1756a0"
      />

      <div className="relative z-10 -mt-20 md:-mt-32 pb-24">
         <ScrollReveal delay={0.1}>
            <div className="container max-w-[1400px] mx-auto px-6">
               <ContactForm />
            </div>
         </ScrollReveal>

         <ScrollReveal delay={0.2}>
            <div className="container max-w-[1400px] mx-auto px-6 mt-12">
               <ContactInfo />
            </div>
         </ScrollReveal>
      </div>
    </div>
  );
}
