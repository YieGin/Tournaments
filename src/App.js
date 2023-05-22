import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import Tournament from "./component/Tournaments/Tournament";
import Lol from "./component/Tournament_Open/LoL/Lol";
import FIFA from "./component/Tournament_Open/FIFA/FIFA";
import FIFAPs from "./component/Tournament_Open/FIFA/FIFAPs";
import Cod from "./component/Tournament_Open/Cod/Cod";
import Rocket from "./component/Tournament_Open/Rocket/Rocket";
import Cssgo from "./component/Tournament_Open/Cssgo/Cssgo";
import Mb_lol from "./component/Tournament_Open/Mobile Lol/Mb_lol";
import Login from "./component/NavBar/Log in page/Login";
import User from "./component/User/styles/User";
import Loading from "./component/Loading";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4350);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/Tournament" element={<Tournament />}></Route>
          <Route path="/Lol" element={<Lol />}></Route>
          <Route path="/FIFA" element={<FIFA />}></Route>
          <Route path="/FIFAPs" element={<FIFAPs />}></Route>
          <Route path="/Cod" element={<Cod />}></Route>
          <Route path="/Rocket" element={<Rocket />}></Route>
          <Route path="/Cssgo" element={<Cssgo />}></Route>
          <Route path="/Mb_lol" element={<Mb_lol />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
