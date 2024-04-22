import styles from './Search.module.css'

export const Search = () => {
	return (
		<>
		<div className={styles.container}>
			<div className={styles.pict}/>
			<input className={styles.input} type="text" placeholder='Поиск по названию'/>
			<button className={styles.btn}>Поиск</button>
		</div>
		</>
	)
}