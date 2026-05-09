// src/App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './layouts/AppLayout';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <HashRouter>
    <Routes>
        <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        </Route>
    </Routes>
    </HashRouter>
  );
}