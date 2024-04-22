import { Search } from "../Search/Search";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Номенклатура</h1>
      <div className={styles.buttons}>
        <Search />
        <button type="button" className={styles.addPosition}>+ Новая позиция</button>
      </div>
    </header>
  );
};
