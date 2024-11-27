import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/pages/About.jsx";
import Contatti from "./components/pages/Contatti.jsx";
import CardsChildren from "./components/pages/CardsChildren.jsx";
import Cards from "./components/pages/Cards.jsx";
import { Provider } from "react-redux";
import store from "./components/redux/store.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
  {
    path: "/cards-children",
    element: <CardsChildren />,
    children: [
      {
        path: ":cardID",
        element: <Cards />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
