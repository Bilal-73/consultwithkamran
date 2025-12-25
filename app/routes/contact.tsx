import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { Header } from "../components/header/header";
import { ChatbotWidget } from "../components/chatbot-widget/chatbot-widget";
import { Button } from "../components/ui/button/button";
import { Input } from "../components/ui/input/input";
import { Textarea } from "../components/ui/textarea/textarea";
import { Label } from "../components/ui/label/label";
import styles from "./contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </section>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h2>
                <MessageSquare size={28} />
                Contact Information
              </h2>
              
              <div className={styles.infoItem}>
                <Mail className={styles.infoIcon} size={20} />
                <div className={styles.infoContent}>
                  <h3>Email</h3>
                  <a href="mailto:kamran@consultwithkamran.com">kamran@consultwithkamran.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Phone className={styles.infoIcon} size={20} />
                <div className={styles.infoContent}>
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MapPin className={styles.infoIcon} size={20} />
                <div className={styles.infoContent}>
                  <h3>Office</h3>
                  <p>123 Business Avenue<br />Suite 456<br />New York, NY 10001</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock className={styles.infoIcon} size={20} />
                <div className={styles.infoContent}>
                  <h3>Business Hours</h3>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Send a Message</h2>
            
            {submitted ? (
              <div className={styles.successMessage}>
                <h3>
                  <CheckCircle size={24} />
                  Message Sent!
                </h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button type="submit" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <ChatbotWidget />
    </>
  );
}
