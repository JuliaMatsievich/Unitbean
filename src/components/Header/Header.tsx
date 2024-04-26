import { FC } from "react";
import { IItem } from "../../inteface/type";
import { Search } from "../Search/Search";
import styles from "./Header.module.css";

interface IHeadersProps {
  items: IItem[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IHeadersProps> = ({
  items,
  search,
  setSearch,
  setIsOpenModalAdd,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Номенклатура</h1>
      <div className={styles.buttons}>
        <Search items={items} search={search} setSearch={setSearch} />
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
