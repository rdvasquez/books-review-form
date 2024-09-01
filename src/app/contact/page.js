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
        width={500}
        height={300}
        className={styles.contactImage}
      />
      <p> Email or call us</p>
      {params.id}
    </div>
  );
}
