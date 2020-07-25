import styles from './regionFilter.module.scss';

const regions = ["Africa", "Americas", "Asia", "Europe", "Ocenia"];

const RegionFilter = ({ onRegionSelect }) => (
  <select
    onChange={(e) => onRegionSelect(e.target.value)}
    className={styles.wrapper} aria-label="Filter a country by region">
    <option value="">Filter a country by region</option>
    {
      regions.map(region => (
        <option key={region} value={region}>{region}</option>
      ))
    }
  </select>
)

export default RegionFilter