import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../Pages/Landing/LandingPage";
import SignupPage from "../pages/Signup/SignupPage";
import AboutPage from "../pages/About/AboutPage";
import ProductsPage from "../pages/Products/ProductsPage";
import PricingPage from "../pages/Pricing/PricingPage";
import SupportPage from "../pages/Support/SupportPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,  // Navbar + Footer
    children: [
      { path: "/", element: <Landing /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/support", element: <SupportPage /> },
      
     
    ],
  },

]);
