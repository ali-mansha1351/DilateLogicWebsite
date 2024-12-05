import styles from "./heading.module.css";

export default function Heading({ services }) {
  const { title, abstract } = services;
  return (
    <div className={styles.headingDiv}>
      <h3>
        <strong>{title}</strong>
      </h3>
      <p className={styles.textWrap}>{abstract}</p>
    </div>
  );
}
