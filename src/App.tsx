import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "../src/pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPasswordPage";
import Task from "./pages/Task";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LogIn />
        </PublicRoute>
      ),
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/task/:category",
      Component: Task,
    },
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "/changepassword",
      element: <ResetPassword />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export default App;
