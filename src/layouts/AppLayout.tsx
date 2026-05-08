// src/layouts/RootLayout.tsx
import { Outlet } from 'react-router-dom'; // Import Outlet
// import Header from '../components/Header';
// import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <div className="layout">
      {/* Static parts */}
      {/* <Header />  */}
      
      {/* Dynamic content goes here, based on the route path */}
      <Outlet />
      
      {/* Static parts */}
      {/* <Footer /> */}
    </div>
  );
}
