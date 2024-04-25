// import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { setCurrentPage } from "../../store/slices/paginationSlice";
import styles from "./Pagination.module.css";

export const Pagination = () => {
  const pages = useAppSelector((state) => state.pagination.pages);
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const dispatch = useAppDispatch();

  const handleClickPage = (page: number) => {
    dispatch(setCurrentPage({ currentPage: page }));
  };

  const handleClickPrev = () => {
    console.log("prev");
  };

  const handleClickNext = () => {
    console.log("next");
  };

  return (
    <>
      <footer className={styles.container}>
        <div className={styles.pages}>
          <div className={styles.itemPageArrowPrev} onClick={handleClickPrev} />
          <div className={styles.pagesContainer}>
            {pages.map((page, index) => (
              <div
                className={
                  currentPage === page ? styles.itemPageActive : styles.itemPage
                }
                onClick={() => handleClickPage(page)}
                key={index}
              >
                {page}
              </div>
            ))}
          </div>
          <div className={styles.itemPageArrowNext} onClick={handleClickNext} />
        </div>
        <div className={styles.pagesNum}>
          <p className={styles.pagesNumText}>Показывать по:</p>
        </div>
      </footer>
    </>
  );
};
