import styles from './layout.module.scss'

const Layout = ({ children }) => <div className={styles.wrapper}>{children}</div>

export default Layout