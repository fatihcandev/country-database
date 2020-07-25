import SearchIcon from '../icons/Search'
import styles from './searchBar.module.scss'

const SearchBar = ({ onSearch }) => (
  <div className={styles.wrapper}>
    <SearchIcon className={styles.icon} />
    <input onChange={(e) => onSearch(e.target.value)} className={styles.input} type="text" aria-label="Search a country" placeholder="Search a country" />
  </div>
)

export default SearchBar