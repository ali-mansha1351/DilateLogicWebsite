import styles from "./developmentProcess.module.css";
export default function DevelopmentProcess() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Development Process</h2>
      <div className={styles.step}>
        <h3 className={styles.subheading}>Requirement Gathering</h3>
        <p className={styles.content}>
          We dive deep into understanding your business needs, objectives, and
          vision to craft a tailored solution.
        </p>
      </div>
      <div className={styles.step}>
        <h3 className={styles.subheading}>Analysis and Planning</h3>
        <p className={styles.content}>
          We strategize and create a roadmap to ensure an efficient and
          transparent development journey.
        </p>
      </div>
      <div className={styles.step}>
        <h3 className={styles.subheading}>Design and Development</h3>
        <p className={styles.content}>
          Our team crafts intuitive designs and robust development to bring your
          ideas to life.
        </p>
      </div>
      <div className={styles.step}>
        <h3 className={styles.subheading}>Testing and Deployment</h3>
        <p className={styles.content}>
          Rigorous testing ensures top-notch quality, and seamless deployment
          marks the successful completion of your project.
        </p>
      </div>
    </div>
  );
}
