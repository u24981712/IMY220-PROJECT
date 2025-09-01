import React from 'react';
import SplashPage from './pages/SplashPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SplashPage />
//   },
//   {
//     path: "/login",
//     element: <LogIn />
//   },
//   {
//     path: "/signup",
//     element: <SignUp />
//   },
//   {
//     path: "/home",
//     element: <Home />
//   },
//   {
//     path: "/profile",
//     element: <Profile />
//   }
// ])


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<SplashPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;