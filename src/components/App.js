import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "../assets/styles/GlobalSyles";
import SignIn from "./SignIn/SignIn";
import HomePage from "./HomePage/HomePage";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import DetailsPage from "./DetailsPage/DetailsPage";
import PrivatePage from "./PrivatePage/PrivatePage";
import Bag from "./Bag/Bag";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        {/*Este código é o que vale, estou deixando
            comentado apenas para testar a rota home e details
        */
        /* <Route
          path="/home"
          element={
            <PrivatePage>
              <HomePage />
            </PrivatePage>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/bag"
          element={
            <PrivatePage>
              <Bag />
            </PrivatePage>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivatePage>
              <Profile />
            </PrivatePage>
          }
        /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:productId" element={<DetailsPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
