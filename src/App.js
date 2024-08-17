import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Home/Home";
import Question from "./Home/Question/Question";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import JKM from "./ServiceIntake/JKM";
import Form from "./Components/Form/Form";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Question />} />
          <Route path="/Janam Kundli Making" element={<JKM />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
