import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./layouts";
import { Main } from "./pages";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
