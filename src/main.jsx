import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './functions/modalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ModalProvider>
            <App />
        </ModalProvider>
    </React.StrictMode>
)
