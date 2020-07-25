import styles from './countryCard.module.scss';
import CountryCardContent from '../CountryCardContent';

const CountryCard = ({ name, population, region, capital, flag, key }) => (
  <div className={styles.wrapper} key={key}>
    <img loading="lazy" src={flag} alt={`flag of ${name}`} className={styles.flag} />
    <div className={styles.content}>
      <h2 className={styles.name}>{name}</h2>
      <CountryCardContent title="Population" text={population} />
      <CountryCardContent title="Region" text={region} />
      <CountryCardContent title="Capital" text={capital} />
    </div>
  </div>
)

export default CountryCard