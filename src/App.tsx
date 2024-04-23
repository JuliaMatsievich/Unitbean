import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Pagination } from "./components/Pagination/Pagination";
import { useGetAuthLoginMutation } from "./api/api";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setToken } from "./store/slices/userSlice";

function App() {
  const [getAuthLogin] = useGetAuthLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getAuthLogin({ login: "admin", password: "admin" })
      .unwrap()
      .then((response) =>
        dispatch(setToken({ accessToken: response.access_token }))
      );
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
