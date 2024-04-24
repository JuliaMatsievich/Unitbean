import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Pagination } from "./components/Pagination/Pagination";
import { useGetAuthLoginMutation, useLazyGetItemsQuery } from "./api/api";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setToken } from "./store/slices/userSlice";
import { IItem, IItems } from "./inteface/type";

function App() {
  const [getAuthLogin] = useGetAuthLoginMutation();
  const [items, setItems] = useState<IItem[]>([]);
  const [getItems] = useLazyGetItemsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAuthLogin({ login: "admin", password: "admin" })
      .unwrap()
      .then((response) =>
        dispatch(setToken({ accessToken: response.access_token }))
      )
      .then(() => {
        getItems(null)
          .unwrap()
          .then((response: IItems) => {
            setItems(response.result);
            console.log("items", items);
          });
      });
  }, []);

  // useEffect(() => {
  //   console.log('data', data);
  // },[isLoading])

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main items={items}/>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
