import styles from './Main.module.css'

export const Main = () => {
	return (
    <>
      <main className={styles.container}>
        <div className={styles.headTable}>
          <div>Название</div>
          <div>Единица измерения</div>
          <div>Артикул/код</div>
          <div />
        </div>
        <div className={styles.contentTable}>
          <div>Корпус Т5МЭ.018500.001 ст.1</div>
          <div>шт</div>
          <div>#3499656</div>
          <button className={styles.editPosition} />
        </div>
        <div className={styles.contentTable}>
          <div>Корпус Т5МЭ.018500.001 ст.1</div>
          <div>шт</div>
          <div>#3499656</div>
          <button className={styles.editPosition} />
        </div>
      </main>
    </>
  );
}