import styles from './Pagination.module.css'

export const Pagination = () => {
	return (
    <>
      <footer className={styles.container}>
        <div className={styles.pages}>
          <div className={styles.itemPageActive}>1</div>
          <div className={styles.itemPage}>2</div>
          <div className={styles.itemPage}>3</div>
          <div className={styles.itemPageArrow}></div>
        </div>
        <div className={styles.pagesNum}>
          <p className={styles.pagesNumText}>Показывать по:</p>
        </div>
      </footer>
    </>
  );
}