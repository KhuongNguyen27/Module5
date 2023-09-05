import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ProductIndex from "./pages/products/Index";
import ProductCreate from "./pages/products/Create";
import ProductEdit from "./pages/products/Edit";

export default function Views() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route
                    index
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>Hello, let's Invoices or Expenses to continue</p>
                        </main>
                    }
                /> */}
                <Route path="/" element={<ProductIndex />} />
                <Route path="/create" element={<ProductCreate />} />
                <Route path="/edit/:id" element={<ProductEdit />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}