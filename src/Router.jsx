import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )
}
