// import React from "react";

// import { createBrowserRouter } from "react-router-dom";
// import Main from "../layout/Main";
// import Home from "../pages/home/Home";
// import Menu from "../pages/shop/Menu";
// import Signup from "../components/Signup";
// import UpdateProfile from "../pages/dashboard/UpdateProfile";
// import CartPage from "../pages/shop/CartPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/menu",
//         element: <Menu/>,
//       },
//       {

//         path: "/cart-page",
//         element: <CartPage/>,
//       },
     
//       {
//         path: "/update-profile",
//         element: <UpdateProfile/>
//       }
//     ],
//   },
//   {
//     path: "/signup",
//     element: <Signup/>
//   }
// ]);

// export default router;
import React from "react"; // Import React
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import Order from "../pages/dashboard/Order";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import UserProfile from "../pages/dashboard/UserProfile";
import CartPage from "../pages/shop/CartPage";
import Login from "../components/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/menu",
          element: <Menu />
        },
        {
          path: "/order",
          element: <PrivateRoute><Order /></PrivateRoute>
        },
        {
          path: "/update-profile",
          element: <UserProfile />
        },
        {
          path: "/cart-page",
          element: <CartPage />
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        {
          path: 'users', 
          element: <Users />
        },
        {
          path: 'add-menu',
          element: <AddMenu />
        }, 
        {
          path: "manage-items",
          element: <ManageItems />
        },
        {
          path: "update-menu/:id",
          element: <UpdateMenu />,
          loader: ({ params }) => fetch(`http://localhost:6001/menu/${params.id}`)
        }
      ]
    }
]);

export default router;
