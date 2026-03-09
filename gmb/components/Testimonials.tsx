import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "The quality of the curtains is exceptional. It transformed my living room into a luxury space. Highly recommend their service!",
    avatar: "/images/curtain1.png"
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    content: "As a designer, I'm very picky with fabrics. CurtainMaster consistently delivers premium quality that my clients love.",
    avatar: "/images/curtain2.png"
  },
  {
    name: "Emma Wilson",
    role: "Architect",
    content: "Professional, timely, and beautiful work. Their automated blackout curtains are a game changer for modern homes.",
    avatar: "/images/curtain3.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="premium-card p-10 glassmorphism flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic text-lg leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
