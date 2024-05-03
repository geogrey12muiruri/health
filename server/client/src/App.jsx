import React from "react";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomePage, Login, Profile, Register, ResetPassword } from "./pages";
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Pillars from './components/pillars/Pillars';
import Socials from "./pages/Socials";
import SymptomCheaker from "./components/carriculum/Carriculum";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}

function App() {
  const { theme } = useSelector((state) => state.theme);
  const location = useLocation();

  const isServicesPage = location.pathname === '/services';
  const isSocialsPage = location.pathname === '/socials';

  return (
    <div data-theme={theme} className='w-full min-h-[100vh]'>
      {!isServicesPage && !isSocialsPage && <Contact />}
      {!isServicesPage && <Navbar />}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile/:id?' element={<Profile />} />
          <Route path='/socials' element={<Socials />} />
          <Route path='/carriculum' element={<SymptomCheaker />} />
          <Route path='/services' element={<Pillars />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
      {!isServicesPage && !isSocialsPage && <Footer />}
    </div>
  );
}

export default App;
