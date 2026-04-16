import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from "./layouts/Root";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
{
  path: "/",
  Component: Root,
  children: [
    {
      index: true,
      Component: Home,
    },
    {
      path: 'register',
      Component: Register,
    }
    
  ]
}
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);