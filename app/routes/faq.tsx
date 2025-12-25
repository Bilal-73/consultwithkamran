import { useState } from "react";
import { Header } from "../components/header/header";
import { ChatbotWidget } from "../components/chatbot-widget/chatbot-widget";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion/accordion";
import { Button } from "../components/ui/button/button";
import { faqs } from "../data/faqs";
import styles from "./faq.module.css";
import { Link } from "react-router";

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Find answers to common questions about our consultation services
          </p>
        </section>

        <div className={styles.categories}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Accordion type="single" collapsible className={styles.faqList}>
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className={styles.contact}>
          <h2>Still have questions?</h2>
          <p>Can't find the answer you're looking for? We're here to help.</p>
          <Button asChild size="lg">
            <Link to="/book">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </main>
      <ChatbotWidget />
    </>
  );
}
