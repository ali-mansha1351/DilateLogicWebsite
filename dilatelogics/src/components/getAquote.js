import styles from "./getAquote.module.css";
export default function GetQuote() {
  return (
    <form className={styles.form}>
      <h2 className={styles.heading}>Get a Quote</h2>
      <input type="text" placeholder="Name" className={styles.input} required />
      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        required
      />
      <input type="text" placeholder="Subject" className={styles.input} />
      <textarea
        placeholder="Message"
        className={styles.textarea}
        required
      ></textarea>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
