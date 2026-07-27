import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/Notfound/Notfound";
import PostDetails from "./Components/PostDetails/PostDetails";
let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <PostDetails /> },
      { path: "*", element: <Notfound /> },
    ],
  },
] ,{
  basename:'/Adasa'
});

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
