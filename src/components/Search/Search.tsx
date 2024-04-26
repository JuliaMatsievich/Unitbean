import { FC } from "react";
import styles from "./Search.module.css";

interface ISearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: FC<ISearchProps> = ({ search, setSearch }) => {

  const handleClickSearch = () => {
    setSearch(search)
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.pict} />
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск по названию"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.btn} onClick={handleClickSearch}>
          Поиск
        </button>
      </div>
    </>
  );
};
