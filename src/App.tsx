import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Pagination } from "./components/Pagination/Pagination";
import { useGetAuthLoginMutation, useLazyGetItemsQuery } from "./api/api";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setToken } from "./store/slices/userSlice";
import { IItem, IItems } from "./inteface/type";
import { setPages } from "./store/slices/paginationSlice";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const [getAuthLogin] = useGetAuthLoginMutation();
  const [items, setItems] = useState<IItem[]>([]);
  const [getItems] = useLazyGetItemsQuery();
  const [search, setSearch] = useState<string>("");
  const filteredItems = useAppSelector((state) => state.items.filteredItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAuthLogin({ login: "admin", password: "admin" })
      .unwrap()
      .then((response) =>
        dispatch(setToken({ accessToken: response.access_token }))
      )
      .then(() => {
        getItems({ page: 1, pageSize: 10 })
          .unwrap()
          .then((response: IItems) => {
            setItems(response.result);
            dispatch(setPages({ totalCount: response.total }));
          });
      });
  }, []);


  return (
    <div className="wrapper">
      <div className="container">
        <Header items={items} search={search} setSearch={setSearch} />
        <Main
          items={search && filteredItems.length > 0 ? filteredItems : items}
        />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
