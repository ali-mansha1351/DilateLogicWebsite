import styles from "./backgroundText.module.css";
import backgroundImage from "../headerImg.jpg";
export default function BackgroundText() {
  return (
    <div
      className={styles.backgroundContainer}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlayText}>
        <h1>Website Development</h1>
      </div>
    </div>
  );
}
