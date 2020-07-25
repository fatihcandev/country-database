import styles from './countryCard.module.scss';

const CountryCard = ({ name, capital, flag }) => (
  <div className={styles.wrapper}>
    <img loading="lazy" src={flag} alt={`flag of ${name}`} className={styles.flag} />
    <div className={styles.content}>
      <h2>{name}</h2>
      <h2>{capital}</h2>
    </div>
  </div>
)

export default CountryCard