import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './Components/Cart';
import { Announcement, Footer } from './paths';
import { useState } from 'react';

export default function App() {
    const [dark, setDark] = useState(false);
    const ToggleDarkMode = () => {
        setDark(!dark);
    };
    return (
        <div>
            <Announcement ToggleDarkMode={ToggleDarkMode} />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>

            <Footer />
        </div>
    );
}
