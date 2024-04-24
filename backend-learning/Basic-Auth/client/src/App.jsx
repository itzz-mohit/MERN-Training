import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={appRoute} />;
}

export default App;
