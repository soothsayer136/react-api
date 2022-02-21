import React, { useState, useEffect } from "react";

import Table from "./components/Table";

import { createStore } from "redux";
import Form from "./components/Form";
import reducers from "./reducers";
import axios from "axios";
import "./App.css";

import { Provider } from "react-redux";

const url = " https://dummy.restapiexample.com/api/v1/employees";
function App() {
  const [data, setData] = useState([]);

  async function getAllEmployees() {
    let res = await axios.get(url);
    let data = res.data.data;
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    getAllEmployees();
  }, []);

  //initialStore
  const initialStore = {
    empData: data,
  };

  const store = createStore(
    reducers,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // cart setup

  return (
    <Provider store={store}>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
