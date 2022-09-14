import styles from "./Header.module.css"
import Logo from "../../assets/logo-white.png"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logobox}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </div>

      <div className={styles.textbox}>
        <h1 className={styles.headingprimary}>
          <span className={styles.headingprimarymain}>Outdoors</span>
          <span className={styles.headingprimarysub}>is where life happens</span>
        </h1>
      </div>
    </header>
  )
}