import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact({ params }) {
  console.log(params);
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <Image
        src="/images/books-bg-1.png"
        alt="The Books Hub"
        width={300}
        height={200}
        className={styles.contactImage}
      />
      <p>
        We are Here to Help! Thank you for your interest in The Books Hub.
        Whether you have a question, feedback, or just want to say hello, we’re
        always excited to hear from you. How Can We Assist You? General
        Inquiries: Got a question about our products or services? We’re happy to
        provide the information you need. Support: Need help with an order or
        experiencing an issue? Our support team is ready to assist you with any
        concerns. Partnerships & Collaborations: Interested in working with us?
      </p>
      {params.id}
    </div>
  );
}
