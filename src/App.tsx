// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './layouts/AppLayout';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
           This defines the layout for the root route ("/").
           Anything at "/" will be inside RootLayout, 
           and HomePage component will render where <Outlet /> was.
        */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          
          {/* You can have other routes that share the same layout */}
          <Route path="/about" element={<AboutPage />} /> 
        </Route>

        {/* 
           Optional: Routes that don't need a header/footer (e.g., login screen)
        */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}