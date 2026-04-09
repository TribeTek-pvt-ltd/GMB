export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export const team: TeamMember[] = [
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
