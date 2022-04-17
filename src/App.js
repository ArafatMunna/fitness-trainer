import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout />
                        </RequireAuth>
                    }
                />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
