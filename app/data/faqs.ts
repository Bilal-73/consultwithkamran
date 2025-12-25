export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation by clicking the 'Book a Consultation' button on the homepage or navigating to the booking page. Fill out the form with your details, select your preferred service and time slot, and submit. You'll receive a confirmation email within 24 hours.",
    category: "Booking"
  },
  {
    question: "What types of consultations do you offer?",
    answer: "We offer Business Strategy Consulting, Career Development Coaching, Financial Planning Advisory, Leadership Training, Marketing & Growth Consulting, and Technology Consulting. Each service is tailored to your specific needs and goals.",
    category: "Services"
  },
  {
    question: "How long is a typical consultation session?",
    answer: "Standard consultation sessions are 60 minutes. However, we offer flexibility based on your needs. Initial consultations may run slightly longer to ensure we fully understand your requirements.",
    category: "Sessions"
  },
  {
    question: "What are your consultation rates?",
    answer: "Rates vary depending on the service type and session length. Please use the chatbot or contact us directly for detailed pricing information tailored to your specific needs.",
    category: "Pricing"
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can reschedule or cancel your appointment up to 24 hours before the scheduled time without any penalty. Please contact us as soon as possible to make changes to your booking.",
    category: "Booking"
  },
  {
    question: "Are consultations available online or in-person?",
    answer: "We offer both online (via video conferencing) and in-person consultations based on your preference and location. Online consultations are available worldwide, while in-person sessions are location-dependent.",
    category: "Sessions"
  },
  {
    question: "How do I prepare for my first consultation?",
    answer: "Before your first session, think about your goals and challenges. Bring any relevant documents or data that might be helpful. We'll send you a preparation guide after you book to help you get the most out of our time together.",
    category: "Sessions"
  },
  {
    question: "What is your refund policy?",
    answer: "If you cancel within 24 hours of booking and more than 48 hours before your scheduled session, you're eligible for a full refund. Cancellations made less than 24 hours before the session are non-refundable.",
    category: "Pricing"
  },
  {
    question: "Do you offer follow-up sessions?",
    answer: "Absolutely! Many clients benefit from follow-up sessions. We offer package deals for multiple sessions at discounted rates. We'll discuss follow-up options during your initial consultation.",
    category: "Services"
  },
  {
    question: "How is my privacy protected?",
    answer: "We take your privacy seriously. All consultations are confidential, and your personal information is protected according to our Privacy Policy. We never share your information with third parties without your explicit consent.",
    category: "Privacy"
  }
];
