import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Pagination } from "./components/Pagination/Pagination";
import {
  useGetAuthLoginMutation,
  useLazyGetItemsQuery,
  useLazyGetItemsSearchQuery,
} from "./api/api";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setToken } from "./store/slices/userSlice";
import { IItem, IItems } from "./inteface/type";
import { setCurrentPage, setPages } from "./store/slices/paginationSlice";
import { useAppSelector } from "./hooks/useAppSelector";
import { AddPosition } from "./components/Modal/ModalAddPosition";

function App() {
  const [getAuthLogin] = useGetAuthLoginMutation();
  const [items, setItems] = useState<IItem[]>([]);
  const [getItems] = useLazyGetItemsQuery();
  const [getSearchItem] = useLazyGetItemsSearchQuery();
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.pagination.currentPage);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);
  const pageSize = Number(useAppSelector((state) => state.pagination.pageSize));


  useEffect(() => {
    getAuthLogin({ login: "admin", password: "admin" })
      .unwrap()
      .then((response) =>
        dispatch(setToken({ accessToken: response.access_token }))
      );

    if (!search) {
      getItems({ page: currentPage, pageSize: pageSize })
        .unwrap()
        .then((response: IItems) => {
          setItems(response.result);
          dispatch(setPages({ totalCount: response.total }));
        });
    } else {
      getSearchItem({ page: currentPage, pageSize: pageSize, itemName: search })
        .unwrap()
        .then((response: IItems) => {
          setItems(response.result);
          dispatch(setPages({ totalCount: response.total }));
        });
    }
  }, [currentPage, items, dispatch, search, pageSize]);

  return (
    <div className="wrapper">
      <div className="container">
        <Header
          search={search}
          setSearch={setSearch}
          setIsOpenModalAdd={setIsOpenModalAdd}
        />
        <Main
          items={items}
        />
        <Pagination
          handlePageChange={(currentPage) =>
            dispatch(setCurrentPage({ currentPage }))
          }
        />
        {isOpenModalAdd && (
          <AddPosition setIsOpenModalAdd={setIsOpenModalAdd} />
        )}
      </div>
    </div>
  );
}

export default App;
