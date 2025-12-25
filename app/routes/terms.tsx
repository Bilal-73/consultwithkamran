import { Header } from "../components/header/header";
import { ChatbotWidget } from "../components/chatbot-widget/chatbot-widget";
import styles from "./privacy.module.css";

export default function Terms() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2024</p>
        </header>

        <div className={styles.content}>
          <p>
            Welcome to Consult with Kamran. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <div className={styles.highlight}>
            <p><strong>Important:</strong> These terms constitute a legally binding agreement between you and Consult with Kamran. If you do not agree to these terms, please do not use our services.</p>
          </div>

          <h2>1. Services</h2>
          <p>
            Consult with Kamran provides professional consultation services in areas including but not limited to business strategy, career development, financial planning, leadership training, marketing, and technology consulting.
          </p>

          <h3>1.1 Service Delivery</h3>
          <ul>
            <li>Consultations may be conducted in-person, via phone, or through video conferencing</li>
            <li>Session duration and format will be confirmed at the time of booking</li>
            <li>We reserve the right to modify service offerings at any time</li>
          </ul>

          <h2>2. Booking and Cancellation</h2>
          
          <h3>2.1 Booking Process</h3>
          <ul>
            <li>Bookings must be made through our official website or authorized channels</li>
            <li>You will receive a confirmation email within 24 hours of booking</li>
            <li>Appointments are confirmed only after payment is received</li>
          </ul>

          <h3>2.2 Cancellation Policy</h3>
          <ul>
            <li>Cancellations made more than 48 hours before the scheduled session: Full refund</li>
            <li>Cancellations made 24-48 hours before: 50% refund</li>
            <li>Cancellations made less than 24 hours before: No refund</li>
            <li>No-shows will be charged the full consultation fee</li>
          </ul>

          <h3>2.3 Rescheduling</h3>
          <ul>
            <li>You may reschedule once without penalty if done 24+ hours in advance</li>
            <li>Subsequent rescheduling requests may incur a fee</li>
          </ul>

          <h2>3. Payment Terms</h2>
          
          <h3>3.1 Fees</h3>
          <ul>
            <li>Consultation fees are specified at the time of booking</li>
            <li>All prices are in USD unless otherwise stated</li>
            <li>Prices are subject to change with 30 days' notice</li>
          </ul>

          <h3>3.2 Payment Methods</h3>
          <ul>
            <li>We accept major credit cards and electronic payment methods</li>
            <li>Payment is required at the time of booking unless otherwise arranged</li>
            <li>Invoices for corporate clients are due within 30 days</li>
          </ul>

          <h3>3.3 Refunds</h3>
          <ul>
            <li>Refunds are processed according to our cancellation policy</li>
            <li>Refunds typically take 5-10 business days to process</li>
            <li>We reserve the right to deny refunds for service violations</li>
          </ul>

          <h2>4. Confidentiality</h2>
          <p>
            All information shared during consultations is treated as confidential and will not be disclosed to third parties without your explicit consent, except as required by law.
          </p>

          <h3>4.1 Your Obligations</h3>
          <ul>
            <li>You agree not to share proprietary methodologies or materials provided during consultations</li>
            <li>You acknowledge that consultations may be recorded with prior notice for quality assurance</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of Consult with Kamran and protected by copyright and intellectual property laws.
          </p>

          <h3>5.1 Limited License</h3>
          <ul>
            <li>You may access and use materials provided during consultations for personal or business use only</li>
            <li>You may not reproduce, distribute, or create derivative works without written permission</li>
          </ul>

          <h2>6. Professional Advice Disclaimer</h2>
          <p>
            While we strive to provide valuable guidance, our consultation services are for informational purposes only and should not be considered as:
          </p>
          <ul>
            <li>Legal advice (consult with a licensed attorney for legal matters)</li>
            <li>Financial advice regulated by securities authorities (consult a licensed financial advisor)</li>
            <li>Medical or mental health counseling</li>
            <li>Guaranteed business outcomes or results</li>
          </ul>
          <p>
            You are responsible for your own decisions and actions based on our consultations.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Consult with Kamran shall not be liable for:
          </p>
          <ul>
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Loss of profits, revenue, or business opportunities</li>
            <li>Any damages exceeding the fees paid for the specific consultation in question</li>
          </ul>

          <h2>8. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any unlawful purpose</li>
            <li>Harass, abuse, or harm our staff or other users</li>
            <li>Provide false or misleading information</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use our services to compete with our business</li>
          </ul>

          <h2>9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>

          <h2>10. Modifications to Terms</h2>
          <p>
            We may modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
          </p>

          <h2>12. Dispute Resolution</h2>
          
          <h3>12.1 Informal Resolution</h3>
          <p>
            In the event of any dispute, both parties agree to first attempt to resolve the matter informally through good-faith negotiations.
          </p>

          <h3>12.2 Arbitration</h3>
          <p>
            If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul>
            <li>Email: legal@consultwithkamran.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Business Avenue, Suite 456, New York, NY 10001</li>
          </ul>

          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
          </p>

          <h2>15. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and Consult with Kamran regarding the use of our services and supersede all prior agreements and understandings.
          </p>
        </div>
      </main>
      <ChatbotWidget />
    </>
  );
}
