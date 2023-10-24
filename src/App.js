
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Scan from "./Scan";
function App() {
  const router = createBrowserRouter([
    {
      path: "/embedded",
      element: <Scan />,
    },
    {
      path: "/",
      element: <Scan />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
