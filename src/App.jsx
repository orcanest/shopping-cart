import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/PageNotFound";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
function App() {
  return (
    <div>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </div>
  );
}

export default App;
