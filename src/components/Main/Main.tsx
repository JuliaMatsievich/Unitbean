import { FC } from "react";
import { IItem } from "../../inteface/type";
import styles from "./Main.module.css";

interface IItemsProps {
  items: IItem[];
}

export const Main: FC<IItemsProps> = ({ items }) => {
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
            <button className={styles.editPosition} />
          </div>
        ))}

        {/* <div className={styles.contentTable}>
          <div>Корпус Т5МЭ.018500.001 ст.1</div>
          <div>шт</div>
          <div>#3499656</div>
          <button className={styles.editPosition} /> */}
        {/* </div> */}
      </main>
    </>
  );
};
