import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider } from "./AuthContext.jsx";
import Loader from "./Components/Loading/index.jsx";
import Index from "./view/index";
import Login from "./view/Login/login_page.jsx";
import SignUp from "./view/SignUp/signup_page.jsx";
import BlogPage from "./view/Blog/blog_page.jsx";
import ServicePage from "./view/Service-page/service_page.jsx";
import ProductDetailPage from "./view/Product-detail/product_detail_page.jsx";

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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoading ? <Loader /> : <Index />} />
          <Route path="/login" element={isLoading ? <Loader /> : <Login />} />
          <Route
            path="/sign-up"
            element={isLoading ? <Loader /> : <SignUp />}
          />
          <Route
            path="/service"
            element={isLoading ? <Loader /> : <ServicePage />}
          />
          <Route path="/blog" element={isLoading ? <Loader /> : <BlogPage />} />
          <Route
            path="/product-detail/:productId"
            element={isLoading ? <Loader /> : <ProductDetailPage />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
