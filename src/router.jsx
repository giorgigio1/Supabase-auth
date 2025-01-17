import App from "./App";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);
