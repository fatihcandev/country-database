import styles from './title.module.css'

const Title = () => (
  <div className={styles.wrapper}>
    <span className={styles.emoji} role="img">🗺️</span>
    <h2 className={styles.text}>Country Database</h2>
  </div>
)

export default Title