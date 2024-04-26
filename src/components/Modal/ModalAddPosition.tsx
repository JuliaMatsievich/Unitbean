import { FC } from "react";
import styles from "./ModalAddPosition.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { IItemForm } from "../../interface/type";
import { useAddItemMutation } from "../../api/api";

interface IModalAddPositionProps {
  setIsOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddPosition: FC<IModalAddPositionProps> = ({
  setIsOpenModalAdd,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IItemForm>();
  const [addItem] = useAddItemMutation();
  const handleAddItem: SubmitHandler<IItemForm> = (data) => {
    addItem(data).unwrap();
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
                <label className={styles.label} htmlFor="name">
                  Название
                </label>
                <input
                  className={styles.input}
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Поле не может быть пустым",
                  })}
                />
                {errors.name && (
                  <div className={styles.error}>{errors.name.message}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="measurement_units">
                  Единицы измерения
                </label>
                <input
                  className={styles.input}
                  id="measurement_units"
                  type="text"
                  {...register("measurement_units", {
                    required: "Поле не может быть пустым",
                  })}
                />
                {errors.measurement_units && (
                  <div className={styles.error}>
                    {errors.measurement_units.message}
                  </div>
                )}
              </div>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="code">
                  Артикул/код
                </label>
                <input
                  className={styles.input}
                  id="code"
                  type="text"
                  {...register("code", {
                    required: "Поле не может быть пустым",
                  })}
                />
                {errors.code && (
                  <div className={styles.error}>{errors.code.message}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <label className={styles.label} htmlFor="description">
                  Описание
                </label>
                <textarea
                  className={styles.textarea}
                  id="description"
                  {...register("description")}
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
