import { FC } from "react";
import { IItem } from "../../inteface/type";
import styles from "./Search.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { searchItems } from "../../store/slices/itemsSlice";

interface ISearchProps {
  items: IItem[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: FC<ISearchProps> = ({ items, search, setSearch }) => {
  const dispatch = useAppDispatch();

  const handleClickSearch = () => {
    dispatch(searchItems({ items, searchValue: search }));
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
