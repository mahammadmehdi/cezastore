import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>} />
      <Route path="/wishlist" element={<Wishlist></Wishlist>} />

      

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
