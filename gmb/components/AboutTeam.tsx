'use client';

import Image from 'next/image';
import AnimatedSection, { itemVariants } from './AnimatedSection';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const team = [
  {
    name: "Alexander Reed",
    role: "Founder & Creative Director",
    image: "/images/team/person1.jpg"
  },
  {
    name: "Elena Petrov",
    role: "Master Artisan",
    image: "/images/team/person2.jpg"
  },
  {
    name: "David Sterling",
    role: "Head of Installation",
    image: "/images/team/person3.jpg"
  },
  {
    name: "Sophia Martinez",
    role: "Senior Designer",
    image: "/images/team/person4.jpg"
  }
];

const AboutTeam = () => {
  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="container max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-primary" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">The People</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-slate-900 mb-4">
              Meet Our <span className="gradient-text"><span className="italic">Expert</span> Team</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
              The passionate specialists dedicated to bringing artistry and precision to your windows.
            </p>
          </div>
        </ScrollReveal>

        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group text-center"
            >
              <div className="relative h-[320px] rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-sm">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6 pt-16 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutTeam;
