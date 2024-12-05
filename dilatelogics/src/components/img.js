import styles from "./img.module.css";
import image from "../headerImg.jpg";
export default function ContentDetail({ services }) {
  const {
    overview,
    strategyWeUse,
    ourFocusAreas: { design, development, technologyStack },
  } = services;
  return (
    <div className={styles.card}>
      <img src={`${image}`} alt="Placeholder" className={styles.image} />
      <h2 className={styles.heading}>Overview</h2>
      <p className={styles.content}>{overview}</p>
      <h3 className={styles.heading}>Strategy We Use</h3>
      <p className={styles.content}>{strategyWeUse}</p>
      <h3 className={styles.heading}>Our Focus Areas</h3>
      <div className={styles.listcontainer}>
        <ul className={styles.list}>
          <li>
            <p className={styles.stackHeading}>Design:</p>
            <ul>
              <li>
                {design[0]}
                {console.log(design[0])}
              </li>
              <li>{design[1]}</li>
              <li>{design[2]}</li>
            </ul>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <p className={styles.stackHeading}>Development:</p>
            <ul>
              <li>{development[0]}</li>
              <li>{development[1]}</li>
              <li>{development[1]}</li>
            </ul>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>
            <p className={styles.stackHeading}>Technology Stack:</p>
            <ul>
              <li>{technologyStack[0]}</li>
              <li>{technologyStack[1]}</li>
              <li>{technologyStack[2]}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
