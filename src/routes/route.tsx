import { createBrowserRouter } from "react-router-dom";
import ExamplePage from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ExamplePage />,
  },
]);
