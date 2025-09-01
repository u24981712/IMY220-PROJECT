import React from 'react';
import SplashPage from './pages/SplashPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<SplashPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/" element={<Profile />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;