import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";  
import AuthProvider from "./AuthProvider/AuthProvider.jsx"; 
import ContactUs from './Pages/Contact/ContactUs';
import AboutUs from "./Pages/About/AboutUs.jsx";
import ProductsDetails from './Pages/ProductsDetails/ProductsDetails';
import Products from "./Pages/ProductsDetails/Products.jsx";
import ErrorPage from "./Pages/Others/ErrorPage.jsx";
import WishList from "./Pages/WishList/WishList.jsx";
import AddToCart from "./Pages/AddToCart/AddToCart.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Register from "./Pages/Auth/Register.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import ProfileDetails from "./Components/Profile/ProfileDetails.jsx";
import CurrentOrder from "./Components/Profile/CurrentOrder.jsx";
import PreviousOrder from "./Components/Profile/PreviousOrder.jsx";
import MyReviews from "./Components/Profile/MyReviews.jsx";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails></ProductsDetails>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/add-to-cart",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
        children:[
          {
            path:'/profile/profiledetails',
            element:<ProfileDetails></ProfileDetails>
          },
          {
            path:'/profile',
            element:<ErrorPage></ErrorPage>
          },
          {
            path:'/profile/current-order',
            element:<CurrentOrder></CurrentOrder>
          },
          {
            path:'/profile/previous-order',
            element:<PreviousOrder></PreviousOrder>
          },
          {
            path:'/profile/my-reviews',
            element:<MyReviews></MyReviews>
          },
        ]
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
