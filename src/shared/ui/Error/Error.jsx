import errorImg from './error.gif'

import styles from './Error.module.scss'

const Error = () => {
  return (
    <img className={styles.errorImg} src={errorImg} alt="error" />
  )
}

export default Error