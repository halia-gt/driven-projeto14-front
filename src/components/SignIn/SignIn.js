import { useState } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Title from "../../assets/styles/Title";
import { IoIosArrowBack } from "react-icons/io";
import SignWrapper from "../../assets/styles/SignWrapper";
import SpanLink from "../../assets/styles/SpanLink";
import { useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/routta";

export default function SignIn() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

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
                const token = answer.data.token;
                const infoJSON = JSON.stringify({ token });
                localStorage.setItem("routta", infoJSON);

                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setDisabled(false);
            });
    }

    return (
        <SignWrapper>
            <IoIosArrowBack />

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