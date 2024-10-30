import ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";


import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    path: "/articles/id",
    element:<Article/>,
},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
