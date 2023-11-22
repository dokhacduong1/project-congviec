import LayoutMain from "../Layout";
import AddCategory from "../Pages/AddCategory";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


export const routes = [
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-category",
        element: <AddCategory />,
      },
    ],
  }
];
