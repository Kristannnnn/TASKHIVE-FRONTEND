import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../src/pages/LandingPage";
import LogIn from "../src/pages/LogIn";
import ProtectedRoute from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import Category from "./pages/Category";
import CreateTask from "./pages/createTask";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Task from "./pages/Task";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LogIn />,
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
      element: <Task />,
    },
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "/task/:category/create",
      element: <CreateTask />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
