// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GiftsPage from './pages/GiftsPage';
import RootLayout from './layouts/AppLayout';

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
          <Route path="/gifts" element={<GiftsPage />} />
          
          {/* You can have other routes that share the same layout */}
          <Route path="/about" element={<HomePage />} /> 
        </Route>

        {/* 
           Optional: Routes that don't need a header/footer (e.g., login screen)
        */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}