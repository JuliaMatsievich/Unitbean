import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import Select, { OnChangeValue, PropsValue } from "react-select";
import { IOption } from "../../interface/type";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setPageSize } from "../../store/slices/paginationSlice";

interface IPaginationProps {
  handlePageChange: (currentPage: number) => void;
}

const options: IOption[] = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
];

export const Pagination: FC<IPaginationProps> = ({ handlePageChange }) => {
  const pages = useAppSelector((state) => state.pagination.pages);
  const pageSize = useAppSelector((state) => state.pagination.pageSize);
  const dispatch = useAppDispatch();

  const getValue = (): PropsValue<IOption> | undefined => {
    return pageSize ? options.find((ps) => ps.value === pageSize) : undefined;
  };

  const onChange = (newValue: OnChangeValue<IOption, boolean> | null) => {
    dispatch(setPageSize({ pageSize: (newValue as IOption).value }));
  };

  return (
    <>
      <footer className={styles.container}>
        <ReactPaginate
          className={styles.pagesContainer}
          initialPage={0}
          breakLabel="..."
          nextLabel={<div className={styles.itemPageArrowNext} />}
          onPageChange={(event) => handlePageChange(event.selected + 1)}
          pageRangeDisplayed={5}
          pageCount={pages.length}
          previousLabel={<div className={styles.itemPageArrowPrev} />}
          renderOnZeroPageCount={null}
          pageClassName={styles.itemPage}
          activeClassName={styles.itemPageActive}
          pageLinkClassName={styles.itemPage}
        />
        <div className={styles.pagesNum}>
          <p className={styles.pagesNumText}>Показывать по:</p>
          <Select
            onChange={onChange}
            options={options}
            value={getValue()}
            placeholder="Выберите"
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#a85757",
                primary: "black",
                neutral0: "#514a4a",
                neutral80: "white",
                neutral90: "white",
                neutral70: "white",
              },
            })}
          />
        </div>
      </footer>
    </>
  );
};
