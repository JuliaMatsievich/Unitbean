import { FC } from "react";
import styles from "./ModalAddPosition.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

interface IModalAddPositionProps {
  setIsOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IItemForm {
  title: string;
  measurement: string;
  artikul: string;
  description: string;
}

export const AddPosition: FC<IModalAddPositionProps> = ({
  setIsOpenModalAdd,
}) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IItemForm>();

  const handleAddItem: SubmitHandler<IItemForm> = (data) => {
    console.log("data", data);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.homeButton} />
          <div
            className={styles.closeButton}
            onClick={() => {
              setIsOpenModalAdd(false);
            }}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Новая позиция</div>
          <div className={styles.subtitle}>
            Заполните все поля для создания новой номенклатуры
          </div>
          <form onSubmit={handleSubmit(handleAddItem)} className={styles.form}>
            <div className={styles.formItems}>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="title">
                  Название
                </label>
                <input
                  className={styles.input}
                  id="title"
                  type="text"
                  {...register("title", {
                    required: "Поле не может быть пустым",
                  })}
                />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="measurement">
                  Единицы измерения
                </label>
                <input
                  className={styles.input}
                  id="measurement"
                  type="text"
                  {...register("measurement", {
                    required: "Поле не может быть пустым",
                  })}
                />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="artikul">
                  Артикул/код
                </label>
                <input
                  className={styles.input}
                  id="artikul"
                  type="text"
                  {...register("artikul", {
                    required: "Поле не может быть пустым",
                  })}
                />
              </div>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="description">
                  Описание
                </label>
                <textarea
                  className={styles.textarea}
                  id="description"
                  {...register("description", {
                    required: "Поле не может быть пустым",
                  })}
                />
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => {
                  setIsOpenModalAdd(false);
                }}
              >
                Отмена
              </button>
              <button type="submit" className={styles.okBtn}>
                Подтвердить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
