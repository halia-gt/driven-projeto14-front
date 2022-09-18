import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/UserContext";
import GlobalStyles from "../assets/styles/GlobalSyles";
import SignIn from "./SignIn/SignIn";
import HomePage from "./HomePage/HomePage";
import SignUp from "./SignUp/SignUp";
import Profile from "./Profile/Profile";
import DetailsPage from "./DetailsPage/DetailsPage";
import PrivatePage from "./PrivatePage/PrivatePage";
import Bag from "./Bag/Bag";
import ShippingAdress from "./ShippingAddress/ShippingAddress";
import Payment from "./Payment/Payment";
import Categories from "./Categories/Categories";
import FilteredProducts from "./FilteredProducts/FilteredProducts";
import Checkout from "./Checkout/Checkout";
import Success from "./Checkout/Success";

export default function App() {
    const [user, setUser] = useState(null);
    const [total, setTotal] = useState(0);
 
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivatePage>
                            <HomePage />
                        </PrivatePage>
                    }
                />
                <Route
                    path="/details/:productId"
                    element={
                        <PrivatePage>
                            <DetailsPage />
                        </PrivatePage>
                    }
                />
                <Route
                    path="/categories"
                    element={
                        <PrivatePage>
                            <Categories />
                        </PrivatePage>
                    }
                />
                <Route
                    path="/categories/:categoryId"
                    element={
                        <PrivatePage>
                            <FilteredProducts />
                        </PrivatePage>
                    }
                />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                    path="/bag"
                    element={
                        <PrivatePage>
                            <Bag total={total} setTotal={setTotal} />
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
                />
                <Route
                    path="/shipping"
                    element={
                        <PrivatePage>
                            <ShippingAdress />
                        </PrivatePage>
                    }
                />
                <Route
                    path="/payment"
                    element={
                        <PrivatePage>
                            <Payment />
                        </PrivatePage>
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <PrivatePage>
                            <Checkout total={total} />
                        </PrivatePage>
                    }
                />
                <Route
                    path="/success"
                    element={
                        <PrivatePage>
                            <Success />
                        </PrivatePage>
                    }
                />
            </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
