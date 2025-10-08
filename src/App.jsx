import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./componenti/Home";
import AboutUs from "./componenti/AboutUs";
import Navbar from "./componenti/Navbar";
import Prodotti from "./componenti/Prodotti.Jsx";
import CartaProdotto from "./componenti/cartaprodotto";
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="prodotti" element={<Prodotti/>} />
        <Route path="prodotti/:id" element={<CartaProdotto/ >} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
