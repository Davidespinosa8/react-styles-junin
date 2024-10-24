import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage, AuthPage, ProductsPage } from "./pages";
import Navbar from "./components/navbar/navbar"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
