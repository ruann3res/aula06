import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/sobre" className={styles.link}>
        Sobre
      </Link>
    </div>
  );
};
