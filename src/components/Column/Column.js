import styles from './Column.module.scss'

const Column = () => {
  return (
    <div className={styles.column}>
      <article className={styles.column}></article>
      <h2 className={styles.title}>Books</h2>
    </div>  
  )

}

export default Column;