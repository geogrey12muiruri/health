import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomePage, Login, Profile, Register, ResetPassword } from "./pages";
import Contact from './components/contact/Contact';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer'
import Socials from "./pages/Socials";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(user)

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}

function App() {
  const { theme } = useSelector((state) => state.theme);

  // Check if the current route is the Socials page
  const isSocialsPage = useLocation().pathname === '/socials';

  return (
    <div data-theme={theme} className='w-full min-h-[100vh]'>
      {!isSocialsPage && <Contact />}
      {!isSocialsPage && <Navbar />}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile/:id?' element={<Profile />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/socials' element={<Socials />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
