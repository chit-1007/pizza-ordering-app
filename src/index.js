import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({ reducer: { cart: cartReducer } });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
