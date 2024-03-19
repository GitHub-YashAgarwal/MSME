import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import MainLayout from "./Layout/mainLayout";
import Signup from "./components/signup";
import ProductData from "./pages/(logged-in)/catalogue";
import Homepage from "./pages/homepage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} path="/">
                    <Route index element={<Home />} />
                    <Route element={<Login />} path="login" />
                    <Route element={<Signup />} path="signup" />
                    <Route element={<Homepage />} path="homepage" />
                    <Route element={<ProductData />} path="catalogue" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
