import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider } from "./AuthContext.jsx";
import { CardProvider } from "./CardContext.jsx";
import Loader from "./Components/Loading/index.jsx";
import Index from "./view/index";
import Login from "./view/Login/login_page.jsx";
import SignUp from "./view/SignUp/signup_page.jsx";
import BlogPage from "./view/Blog/blog_page.jsx";
import ServicePage from "./view/Service-page/service_page.jsx";
import ComparePage from "./view/Compare/compare_page.jsx";
import ProductDetailPage from "./view/Product-detail/product_detail_page.jsx";
import ViewCartPage from "./view/ViewCart/view_cart_page.jsx";
import ScrollToTop from "./scroll-to-top.jsx";
import "./index.scss";
import AdminPage from "./view/Admin/admin_form.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CardProvider>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={isLoading ? <Loader /> : <Index />} />
              <Route
                path="/login/*"
                element={isLoading ? <Loader /> : <Login />}
              />
              <Route
                path="/sign-up"
                element={isLoading ? <Loader /> : <SignUp />}
              />
              <Route
                path="/service"
                element={isLoading ? <Loader /> : <ServicePage />}
              />
              <Route
                path="/blog"
                element={isLoading ? <Loader /> : <BlogPage />}
              />
              <Route
                path="/compare"
                element={isLoading ? <Loader /> : <ComparePage />}
              />
              <Route
                path="/product-detail/:productId"
                element={isLoading ? <Loader /> : <ProductDetailPage />}
              />
              <Route
                path="view-cart"
                element={isLoading ? <Loader /> : <ViewCartPage />}
              />
              <Route
                path="/admin"
                element={isLoading ? <Loader /> : <AdminPage />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ScrollToTop>
        </CardProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
