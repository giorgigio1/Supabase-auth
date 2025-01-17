import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <div className="bg-gray-500 w-full h-screen">
    <h1 className="text-center pt-4 text-3xl">React Supabase Auth & Content</h1>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </div>
);
