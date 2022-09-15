import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../assets/styles/GlobalSyles";
import HomePage from "./HomePage/HomePage";
import SignUp from "./SignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
    </BrowserRouter>
  );
}