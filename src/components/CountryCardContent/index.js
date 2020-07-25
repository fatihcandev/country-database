import styles from './countryCardContent.module.css'

const CountryCardContent = ({ title, text }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}:</h2>
    <p>{text}</p>
  </div>
)

export default CountryCardContent