import { Header } from "../components/header/header";
import { ChatbotWidget } from "../components/chatbot-widget/chatbot-widget";
import styles from "./privacy.module.css";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2024</p>
        </header>

        <div className={styles.content}>
          <p>
            At Consult with Kamran, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <div className={styles.highlight}>
            <p><strong>In summary:</strong> We only collect information necessary to provide you with excellent consultation services. We never sell your personal information to third parties.</p>
          </div>

          <h2>Information We Collect</h2>
          
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for a consultation</li>
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Interact with our chatbot</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact details (email, phone number, address)</li>
            <li>Professional information (company, job title)</li>
            <li>Consultation preferences and requirements</li>
            <li>Payment and billing information</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our consultation services</li>
            <li>Process your bookings and transactions</li>
            <li>Send you confirmations, updates, and administrative messages</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze usage patterns to improve our website and services</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and providing services (e.g., payment processors, email services)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure payment processing</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2>Your Privacy Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Object:</strong> Object to certain processing of your information</li>
          </ul>
          <p>To exercise these rights, please contact us at privacy@consultwithkamran.com</p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@consultwithkamran.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Business Avenue, Suite 456, New York, NY 10001</li>
          </ul>
        </div>
      </main>
      <ChatbotWidget />
    </>
  );
}
