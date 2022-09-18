import { useState, useContext } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Title from "../../assets/styles/Title";
import SignWrapper from "../../assets/styles/SignWrapper";
import SpanLink from "../../assets/styles/SpanLink";
import { Navigate, useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/routta";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
    const { setUser } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("routtastore"));

    if (auth) {
        return <Navigate to="/" />
    }

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        postSignIn(data)
            .then((answer) => {
                const user = answer.data;
                setUser(user);
                const infoJSON = JSON.stringify({ token: user.token });
                localStorage.setItem("routtastore", infoJSON);

                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setDisabled(false);
            });
    }


    return (
        <SignWrapper>
            <Title>Login</Title>

            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Email
                </Input>

                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Password
                </Input>

                <SpanLink changeRoute={() => navigate("/sign-up")}>Do not have an account?</SpanLink>

                <Button>LOGIN</Button>
            </form>
        </SignWrapper>
    );
}