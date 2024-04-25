// import { useEffect } from "react";
// import { useAppDispatch } from "../../hooks/useAppDispatch";
import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
// import { setCurrentPage } from "../../store/slices/paginationSlice";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  handlePageChage: (currentPage: number) => void
}

export const Pagination: FC<IPaginationProps> = ({ handlePageChage }) => {
  const pages = useAppSelector((state) => state.pagination.pages);

  return (
    <>
      <footer className={styles.container}>
        <ReactPaginate
          className={styles.pagesContainer}
          initialPage={0}
          breakLabel="..."
          nextLabel={<div className={styles.itemPageArrowNext} />}
          onPageChange={(event) => handlePageChage(event.selected + 1)}
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
        </div>
      </footer>
    </>
  );
};
