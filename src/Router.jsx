import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/page-sections/Navbar'
import Footer from './components/page-sections/Footer'

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
