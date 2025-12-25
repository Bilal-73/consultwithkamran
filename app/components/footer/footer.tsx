import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Consult with Kamran</h3>
            <p>
              Empowering individuals and businesses to achieve their full potential through strategic guidance and actionable insights.
            </p>
            <div className={styles.social}>
              <a 
                href="https://linkedin.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <nav className={styles.links}>
              <Link to="/" className={styles.link}>Home</Link>
              <Link to="/about" className={styles.link}>About</Link>
              <Link to="/book" className={styles.link}>Book Consultation</Link>
              <Link to="/faq" className={styles.link}>FAQ</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4>Resources</h4>
            <nav className={styles.links}>
              <Link to="/contact" className={styles.link}>Contact Us</Link>
              <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
              <Link to="/terms" className={styles.link}>Terms of Service</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <a href="mailto:kamran@consultwithkamran.com">
                kamran@consultwithkamran.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>New York, NY 10001</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Consult with Kamran. All rights reserved.
          </p>
          <nav className={styles.legalLinks}>
            <Link to="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link to="/terms" className={styles.legalLink}>Terms</Link>
            <Link to="/contact" className={styles.legalLink}>Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
