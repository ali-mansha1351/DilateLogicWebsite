import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <h2>Dilate Solutions</h2>
          <p>
            Empowering businesses with innovative software solutions tailored to
            your needs.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h3>Contact Us</h3>
          <p>
            <i class="fas fa-phone"></i> +92 300 1234567
          </p>
          <p>
            <i class="fas fa-envelope"></i> info@dilatesolutions.com
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> Lahore, Pakistan
          </p>
        </div>

        <div className={styles.footerSocial}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 Dilate Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
