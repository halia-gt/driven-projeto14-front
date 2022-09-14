import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
    </BrowserRouter>
  );
}