import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
