import { FC } from "react";
import styles from "./ModalAddPosition.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { IItem, IItemForm } from "../../inteface/type";
import { useEditItemByIdMutation } from "../../api/api";

interface IModalEditPositionProps {
  setIsOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  item: IItem;
}

export const EditPosition: FC<IModalEditPositionProps> = ({
  setIsOpenModalEdit,
  item,
}) => {
  const [editById] = useEditItemByIdMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IItemForm>({
    defaultValues: {
      name: item.name,
      description: item.description,
      measurement_units: item.measurement_units,
      code: item.code,
    },
  });

  const handleAddItem: SubmitHandler<IItemForm> = (data) => {
    editById({ ...data, id: item.id }).unwrap();
    setIsOpenModalEdit(false)
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.homeButton} />
          <div
            className={styles.closeButton}
            onClick={() => {
              setIsOpenModalEdit(false);
            }}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Редактировать позицию</div>
          <div className={styles.subtitle}>
            Заполните все поля для редактирования номенклатуры
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
                  setIsOpenModalEdit(false);
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
