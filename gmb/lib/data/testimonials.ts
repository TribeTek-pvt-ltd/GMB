export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
  tag: string;
  initial: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Homeowner, Paddington",
    rating: 5,
    quote: "GMB transformed our living room entirely. The bespoke motorized blinds fit perfectly and the whole process was so easy. Worth every cent. Their attention to detail was exactly what we were looking for in a premium service.",
    image: "/images/curtain1.png",
    tag: "Motorized Blinds",
    initial: "S",
    color: "#3d9e41", // Green
  },
  {
    name: "James L.",
    role: "Interior Designer, CBD",
    rating: 5,
    quote: "I specify GMB for every client. Their quality is consistent, installation is always on time, and the breadth of fabric choices is unmatched in the industry. It makes my job significantly easier.",
    image: "/images/curtain2.png",
    tag: "Custom Curtains",
    initial: "J",
    color: "#1756a0", // Blue
  },
  {
    name: "Priya K.",
    role: "Property Developer",
    rating: 5,
    quote: "We fitted 40 apartments with GMB's blackout roller blinds. Every single one was perfect. The buyers noticed immediately — it's a genuine value-add that elevates the entirely property.",
    image: "/images/curtain3.png",
    tag: "Roller Blinds",
    initial: "P",
    color: "#3d9e41", // Green
  },
];
