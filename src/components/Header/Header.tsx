import { FC } from "react";
import { IItem } from "../../inteface/type";
import { Search } from "../Search/Search";
import styles from "./Header.module.css";

interface IHeadersProps {
  items: IItem[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: FC<IHeadersProps> = ({ items, search, setSearch }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Номенклатура</h1>
      <div className={styles.buttons}>
        <Search items={items} search={search} setSearch={setSearch} />
        <button type="button" className={styles.addPosition}>
          + Новая позиция
        </button>
      </div>
    </header>
  );
};
