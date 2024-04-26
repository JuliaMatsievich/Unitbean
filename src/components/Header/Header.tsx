import { FC } from "react";
import { Search } from "../Search/Search";
import styles from "./Header.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";

interface IHeadersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IHeadersProps> = ({
  search,
  setSearch,
  setIsOpenModalAdd,
}) => {

  const totalCount = useAppSelector(state => state.pagination.totalCount)
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Номенклатура</h1>
        <div className={styles.countItems}>{totalCount} единиц</div>
      </div>

      <div className={styles.buttons}>
        <Search search={search} setSearch={setSearch} />
        <button
          type="button"
          className={styles.addPosition}
          onClick={() => setIsOpenModalAdd(true)}
        >
          + Новая позиция
        </button>
      </div>
    </header>
  );
};
