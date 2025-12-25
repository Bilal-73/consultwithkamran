import { Award, BookOpen, Heart, Shield, Target, Users } from "lucide-react";
import styles from "./about.module.css";
import { Header } from "../components/header/header";
import { ChatbotWidget } from "../components/chatbot-widget/chatbot-widget";

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About Kamran</h1>
          <p className={styles.subtitle}>
            Empowering individuals and businesses to achieve their full potential through strategic guidance and actionable insights.
          </p>
        </section>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professional Background</h2>
            <p className={styles.bio}>
              With over 15 years of experience in business strategy, leadership development, and financial advisory, Kamran has helped hundreds of clients transform their careers and businesses. His approach combines analytical rigor with practical wisdom, ensuring that every recommendation is both strategic and actionable.
            </p>
            <p className={styles.bio}>
              Kamran's diverse background spans multiple industries including technology, finance, healthcare, and retail. This breadth of experience allows him to bring unique perspectives and cross-industry insights to every consultation.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Credentials & Expertise</h2>
            <div className={styles.credentials}>
              <div className={styles.credential}>
                <Award className={styles.credentialIcon} size={24} />
                <div className={styles.credentialContent}>
                  <h3>MBA - Harvard Business School</h3>
                  <p>Specialized in Strategy and Organizational Leadership</p>
                </div>
              </div>
              <div className={styles.credential}>
                <BookOpen className={styles.credentialIcon} size={24} />
                <div className={styles.credentialContent}>
                  <h3>Certified Financial Planner (CFP)</h3>
                  <p>Licensed to provide comprehensive financial planning services</p>
                </div>
              </div>
              <div className={styles.credential}>
                <Target className={styles.credentialIcon} size={24} />
                <div className={styles.credentialContent}>
                  <h3>Executive Coach Certification - ICF</h3>
                  <p>International Coaching Federation accredited professional</p>
                </div>
              </div>
              <div className={styles.credential}>
                <Users className={styles.credentialIcon} size={24} />
                <div className={styles.credentialContent}>
                  <h3>Former VP of Strategy - Fortune 500</h3>
                  <p>Led strategic initiatives for a global technology company</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Core Values</h2>
            <div className={styles.values}>
              <div className={styles.value}>
                <Shield className={styles.valueIcon} />
                <h3>Integrity</h3>
                <p>Honest, transparent guidance you can trust</p>
              </div>
              <div className={styles.value}>
                <Heart className={styles.valueIcon} />
                <h3>Client-Centered</h3>
                <p>Your success is our primary measure of achievement</p>
              </div>
              <div className={styles.value}>
                <Target className={styles.valueIcon} />
                <h3>Results-Driven</h3>
                <p>Actionable strategies that deliver measurable outcomes</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ChatbotWidget />
    </>
  );
}
