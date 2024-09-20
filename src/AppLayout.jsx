import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar'; // Import your Navbar component

const AppLayout = ({ children }) => {
  const location = useLocation();

  // Check if the current page is the login page
  const isLoginPage = location.pathname === '/login'; // Adjust this to match your login route

  return (
    <>
      {!isLoginPage && <Navbar />} {/* Hide navbar on the login page */}
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
