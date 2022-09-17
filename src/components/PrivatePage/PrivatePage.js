import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { getUser } from "../../services/routta";
import Loader from "../Loader/Loader";

export default function PrivatePage({ children }) {
    const auth = JSON.parse(localStorage.getItem("routtastore"));
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        async function getUserAPI() {
            try {
                const answer = (await getUser());
                setUser(answer.data);

            } catch (error) {
                console.log(error);
            }
        }

        if(auth && !user) {
            getUserAPI();
        }
    }, []);

    if (auth) {
        return (
            <>
                {user ? children : <Loader />}
            </>
        )
    } else {
        return <Navigate to="/sign-in" />
    }
}