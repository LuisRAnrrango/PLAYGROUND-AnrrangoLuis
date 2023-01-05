import "./App.css";
import { Footer } from "./pages/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Imccalculator } from "./pages/Imccalculator";
import { Agecalculator } from "./pages/Agecalculator";
import { Myclock } from "./pages/Myclock";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  const footerInfo = {
    name: "Luis",
    //contact: +593993273984,
    // email: "luisitoylag@gmail.com",
  };
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/imccal" element={<Imccalculator />} />
        <Route path="/agecal" element={<Agecalculator />} />
        <Route path="/clock" element={<Myclock />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer {...footerInfo}></Footer>
    </Router>
  );
};

export default App;
