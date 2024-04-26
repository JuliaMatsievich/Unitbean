import { FC, useState } from "react";
import { IItem } from "../../interface/type";
import styles from "./Main.module.css";
import { EditPosition } from "../Modal/ModalEditPosition";

interface IItemsProps {
  items: IItem[];
}

export const Main: FC<IItemsProps> = ({ items }) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);

  return (
    <>
      <main className={styles.container}>
        <div className={styles.headTable}>
          <div>Название</div>
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
