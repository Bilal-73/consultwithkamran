import { Link } from "react-router";
import { Calendar, Clock } from "lucide-react";
import type { Route } from "./+types/home";
import { Header } from "~/components/header/header";
import { Footer } from "~/components/footer/footer";
import { ChatbotWidget } from "~/components/chatbot-widget/chatbot-widget";
import { services } from "~/data/services";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Consult with Kamran - Professional Consultation Services" },
    {
      name: "description",
      content:
        "Expert consultation services in business strategy, career coaching, leadership training, and more. Book your personalized session today.",
    },
  ];
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Transform Your Future with Expert Guidance</h1>
          <p className={styles.heroSubtitle}>
            Professional consultation services tailored to your unique needs. Whether you're seeking business strategy,
            career development, or personal growth, I'm here to help you achieve your goals.
          </p>
          <Link to="/book" className={styles.ctaButton}>
            <Calendar className={styles.ctaIcon} />
            Book a Consultation
          </Link>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.sectionTitle}>Services Offered</h2>
          <p className={styles.sectionSubtitle}>
            Explore our comprehensive range of consultation services designed to empower your personal and professional
            journey.
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.id} className={styles.serviceCard}>
                <img src={service.imageUrl} alt={service.title} className={styles.serviceImage} />
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.serviceDuration}>
                    <Clock className={styles.durationIcon} />
                    {service.duration}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotWidget />
    </div>
  );
}
