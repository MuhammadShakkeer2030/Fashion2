import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './Components/Cart';
import { Announcement, Footer } from './paths';

export default function App() {
    return (
        <div>
            <Announcement />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>

            <Footer />
        </div>
    );
}
