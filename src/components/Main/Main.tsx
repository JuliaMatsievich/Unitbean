import { FC, useState } from "react";
import { IItem } from "../../interface/type";
import styles from "./Main.module.css";
import { EditPosition } from "../Modal/ModalEditPosition";

interface IItemsProps {
  items: IItem[];
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const Main: FC<IItemsProps> = ({ items, sortOrder, setSortOrder }) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);

  const hahdleSortItems = () => {
    if (sortOrder === 'ASC') setSortOrder('DESC')
    if (sortOrder === "DESC") setSortOrder("ASC");
  };

  return (
    <>
      <main className={styles.container}>
        <div className={styles.headTable}>
          <div className={styles.headName}>
            Название{" "}
            <div className={styles.sortImage} onClick={hahdleSortItems}>
              {sortOrder === "ASC" ? (
                <svg
                  width="13.000000"
                  height="7.000000"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <path
                    id="Icon"
                    d="M0.35 1.73L0.32 1.73C-0.09 1.35 -0.12 0.73 0.26 0.32C0.64 -0.09 1.26 -0.12 1.67 0.26L1.67 0.29L0.35 1.73ZM10.32 0.29L10.32 0.26C10.73 -0.12 11.35 -0.09 11.73 0.32C12.11 0.73 12.08 1.35 11.67 1.73L11.64 1.73L10.32 0.29Z"
                    fill="#514a4a"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Icon"
                    d="M1 1L6 5.57L11 1"
                    stroke="#514a4a"
                    strokeOpacity="1.000000"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="13.000000"
                  height="7.000000"
                  viewBox="0 0 13 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs />
                  <path
                    id="Icon"
                    d="M0.35 1.73L0.32 1.73C-0.09 1.35 -0.12 0.73 0.26 0.32C0.64 -0.09 1.26 -0.12 1.67 0.26L1.67 0.29L0.35 1.73ZM10.32 0.29L10.32 0.26C10.73 -0.12 11.35 -0.09 11.73 0.32C12.11 0.73 12.08 1.35 11.67 1.73L11.64 1.73L10.32 0.29Z"
                    fill="#514a4a"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                    transform="translate(6.5 3.5) rotate(180) translate(-6.5 -3.5)"
                  />
                  <path
                    id="Icon"
                    d="M1 1L6 5.57L11 1"
                    stroke="#514a4a"
                    strokeOpacity="1.000000"
                    strokeWidth="2.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    transform="translate(6.5 3.5) rotate(180) translate(-6.5 -3.5)"
                  />
                </svg>
              )}
            </div>
          </div>
          <div>Единица измерения</div>
          <div>Артикул/код</div>
          <div />
        </div>
        {items.map((item) => (
          <div key={item.id} className={styles.contentTable}>
            <div>{item.name}</div>
            <div>шт</div>
            <div>{item.code}</div>
            <button
              className={styles.editPosition}
              onClick={() => setIsOpenModalEdit(true)}
            />
            {isOpenModalEdit && (
              <EditPosition
                setIsOpenModalEdit={setIsOpenModalEdit}
                item={item}
              />
            )}
          </div>
        ))}
      </main>
    </>
  );
};
