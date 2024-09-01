import styles from "./about.module.css";
import Image from "next/image";

export default function About({ params }) {
  console.log(params);
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <Image
        src="/images/books.png"
        alt="The Books Hub"
        width={500}
        height={300}
        className={styles.aboutImage}
      />
      <p className={styles.aboutText}>
        Welcome to The Books Hub, your number one source for all things books.
        We are dedicated to providing you with the very best of book reviews...
      </p>
      {params.id}
    </div>
  );
}
