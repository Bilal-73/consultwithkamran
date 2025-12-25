import { Link } from "react-router";
import { MessageCircle } from "lucide-react";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <MessageCircle className={styles.logoIcon} />
          <span className={styles.logoText}>Consult with Kamran</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/book" className={styles.navLink}>
            Book Consultation
          </Link>
          <Link to="/faq" className={styles.navLink}>
            FAQ
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
