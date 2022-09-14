import styles from "./Header.module.css"
import Logo from "../../assets/logo-white.png"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logobox}>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </div>
    </header>
  )
}