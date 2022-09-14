import { useState } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Title from "../../assets/styles/Title";
import { IoIosArrowBack } from "react-icons/io";
import { IconContext } from "react-icons";
import Wrapper from "./styles";
import SpanLink from "../../assets/styles/SpanLink";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        username: "",
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
    }

    return (
        <Wrapper>
            <IconContext.Provider value={{ color: "#222222", className: "icon", size: "24px" }}>
                <IoIosArrowBack />
            </IconContext.Provider>

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

                <SpanLink changeRoute={() => navigate("/")}>Already have an account?</SpanLink>

                <Button>SIGN UP</Button>
            </form>
        </Wrapper>
    );
}