import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../src/pages/LandingPage";
import LogIn from "../src/pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
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
      element: <Register />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "forgotpassword",
      element: <ForgotPassword />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
