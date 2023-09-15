import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/index';
import Pizza from './pages/Pizza/index';
import PageHamburguer from './pages/Hamburguer/index';
import PageRefrau from './pages/Refrau/index'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/PagePizza" element={<Pizza />} />
                <Route path="/PageHamburguer" element={<PageHamburguer />} />
                <Route path="/PageRefrau" element={<PageRefrau />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
