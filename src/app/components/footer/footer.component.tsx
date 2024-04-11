import Image from "next/image";

import styles from "./footer.module.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerItem}>
        <div className={styles.logoContainer}>
          <ViewInArIcon />
        </div>
        <p>
          <span style={{ color: "#1976D2", fontWeight: "bold" }}>CUBE</span> is a platform that connects buyers and
          sellers of digital goods.
          <br />
          We provide a secure and easy-to-use platform for buying and selling digital goods.
        </p>
        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          <div className={styles.socialMediaIcons}>
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a href="https://www.twitter.com">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerItem}>
        <div>
          <h2>About CUBE</h2>
          <ul>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerItem}>
        <div>
          <h2>Support</h2>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/shipping">Shipping</a>
            </li>
            <li>
              <a href="/returns">Returns</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
