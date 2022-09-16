import { useState } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Title from "../../assets/styles/Title";
import { IoIosArrowBack } from "react-icons/io";
import SignWrapper from "../../assets/styles/SignWrapper";
import SpanLink from "../../assets/styles/SpanLink";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/routta";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
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

        postSignUp(data)
            .then(() => {
                navigate("/sign-in");
            })
            .catch((error) => {
                console.log(error.request.response);
                setDisabled(false);
            });
    }

    return (
        <SignWrapper>
            <Title>Sign up</Title>

            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Name"
                    name="username"
                    value={data.username}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Name
                </Input>

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

                <Input
                    type="password"
                    placeholder="Confirm password"
                    name="confirm_password"
                    value={data.confirm_password}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Confirm password
                </Input>

                <SpanLink changeRoute={() => navigate("/sign-in")}>Already have an account?</SpanLink>

                <Button>SIGN UP</Button>
            </form>
        </SignWrapper>
    );
}