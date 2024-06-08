import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import ProductPage from "../Pages/ProductPage";
import Category from "../Pages/Category";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/category/:categoryName" element={<Category />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default AllRoutes;
