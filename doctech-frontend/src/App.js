import "./App.css";
import AadharVerify from "./Components/AadharVerify/AadharVerify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import PatientData from "./Components/PatientData/PatientData";
import Home from "./Components/Home/Home";
import Drugs from "./Components/DrugRecord/Drugs";
import Record from "./Components/Record/Record";
import DoctorOnboard from "./Components/Authenticate/DoctorOnboard/DoctorOnboard";
import SignUp from "./Components/Authenticate/SignUp";
import SignIn from "./Components/Authenticate/SignIn";
// import DrugRecord from "./Components/DrugRecord/DrugRecord";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/medicalPrice" element={<Drugs />} />
        <Route path="/:user" element={<PatientData />} />
        <Route path="/verify" element={<AadharVerify />} />
        <Route path="/record" element={<Record />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
