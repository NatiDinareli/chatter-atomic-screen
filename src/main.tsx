
import { createRoot } from 'react-dom/client'
import { Navigate, Route, Routes } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import LoginPage from './pages/LoginPage.tsx';

createRoot(document.getElementById("root")!).render(<App />);
