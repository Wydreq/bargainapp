import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import HeaderNavBar from "./components/HeaderNavBar";
import "./App.css";

const AppLayout = () => {
  return (
    <>
      <HeaderNavBar />
      <Outlet />
    </>
  );
};

function App() {
  const authToken = useSelector((state) => state.auth.token);
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      },
    ],
  },
]);

export default App;
