export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "business-strategy",
    title: "Business Strategy Consultation",
    description:
      "Strategic planning and business development guidance to help you achieve your organizational goals and drive sustainable growth.",
    duration: "60 minutes",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
  },
  {
    id: "career-coaching",
    title: "Career Development Coaching",
    description:
      "Personalized career guidance to help you navigate professional transitions, enhance your skills, and achieve your career aspirations.",
    duration: "45 minutes",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
  },
  {
    id: "leadership-training",
    title: "Leadership Training",
    description:
      "Develop essential leadership skills and learn effective management techniques to inspire and guide your team to success.",
    duration: "90 minutes",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  },
  {
    id: "financial-planning",
    title: "Financial Planning Advisory",
    description:
      "Expert financial consultation to help you make informed decisions about investments, budgeting, and long-term financial security.",
    duration: "60 minutes",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  },
  {
    id: "personal-development",
    title: "Personal Development",
    description:
      "One-on-one coaching focused on personal growth, goal setting, and building habits that lead to a more fulfilling life.",
    duration: "45 minutes",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop",
  },
  {
    id: "startup-mentorship",
    title: "Startup Mentorship",
    description:
      "Comprehensive guidance for entrepreneurs and startups, from ideation to execution, helping you build and scale your venture.",
    duration: "75 minutes",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
  },
];
