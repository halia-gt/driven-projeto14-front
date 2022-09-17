import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../assets/styles/GlobalSyles";
import SignIn from "./SignIn/SignIn";
import HomePage from "./HomePage/HomePage";
import SignUp from "./SignUp/SignUp";
import Bag from "./Bag/Bag";
import Profile from "./Profile/Profile";
import PrivatePage from "./PrivatePage/PrivatePage";
import ShippingAdress from "./ShippingAddress/ShippingAddress";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyles />
            <Routes>
                <Route path="/" element={
                    <PrivatePage>
                        <HomePage />
                    </PrivatePage>
                } />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/bag" element={
                    <PrivatePage>
                        <Bag />
                    </PrivatePage>
                } />
                <Route path="/profile" element={
                    <PrivatePage>
                        <Profile />
                    </PrivatePage>
                } />
                <Route path="/shipping" element={
                    <PrivatePage>
                        <ShippingAdress />
                    </PrivatePage>
                } />
            </Routes>
    </BrowserRouter>
  );
}