import { createBrowserRouter, RouterProvider } from "react-router";
function Home() {
  return (
    <div className="flex ">
      <div> this is a container</div>
      {/* asdfasdasdas */}
    </div>
  );
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
