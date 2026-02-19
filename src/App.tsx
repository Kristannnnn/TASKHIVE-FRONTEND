import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "../src/pages/LandingPage";
import ProtectedRoute from "./components/global/routes/ProtectedRoutes";
import PublicRoute from "./components/global/routes/PublicRoute";
import ComingSoon from "./pages/ComingSoon";
import Archive from "./pages/dashboard/archive/Archive";
import ArchiveCategory from "./pages/dashboard/archive/ArchiveCategory";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/dashboard/task/Category";
import Task from "./pages/dashboard/task/Task";
import LogIn from "./pages/login/LogIn";
import ForgotPassword from "./pages/signup/ForgotPassword";
import Register from "./pages/signup/Register";
import ResetPassword from "./pages/signup/ResetPasswordPage";
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
      element: (
        <ProtectedRoute>
          <Task />
        </ProtectedRoute>
      ),
    },
    {
      path: "/category",
      element: (
        <ProtectedRoute>
          <Category />
        </ProtectedRoute>
      ),
    },
    {
      path: "/archive/:category",
      element: (
        <ProtectedRoute>
          <Archive />
        </ProtectedRoute>
      ),
    },
    {
      path: "/archivecategory",
      element: (
        <ProtectedRoute>
          {" "}
          <ArchiveCategory />
        </ProtectedRoute>
      ),
    },
    {
      path: "/changepassword",
      element: (
        <PublicRoute>
          <ResetPassword />,
        </PublicRoute>
      ),
    },
    {
      path: "/comingsoon",
      element: (
        <ProtectedRoute>
          <ComingSoon />,
        </ProtectedRoute>
      ),
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
