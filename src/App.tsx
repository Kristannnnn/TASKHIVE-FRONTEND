import { createBrowserRouter, RouterProvider } from "react-router";
import LogIn from "../src/pages/LogIn";
import LandingPage from "../src/pages/LandingPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage/>
    },
    {
      path:"/login",
      element: <LogIn/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
