import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../assets/styles/GlobalSyles";
import SignIn from "./SignIn/SignIn";
import HomePage from "./HomePage/HomePage";
import SignUp from "./SignUp/SignUp";
import Bag from "./Bag/Bag";
import Profile from "./Profile/Profile";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
    </BrowserRouter>
  );
}