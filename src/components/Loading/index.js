import Spinner from "../icons/Spinner";
import styles from './loading.module.css'

const Loading = () => (
  <div className={styles.wrapper}>
    <Spinner />
  </div>
)

export default Loading