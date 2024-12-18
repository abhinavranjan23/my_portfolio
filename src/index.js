import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./Components/Navbar";
import reportWebVitals from "./reportWebVitals";
import Body from "./Components/Body";
import NightModeContext from "./utils/NightModeContext";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  return (
    <div>
      <NightModeContext.Provider value={{ nightMode, setNightMode }}>
        <Navbar />
        <Outlet />
      </NightModeContext.Provider>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
