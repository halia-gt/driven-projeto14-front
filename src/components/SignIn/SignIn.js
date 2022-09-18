import { useState, useContext } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Title from "../../assets/styles/Title";
import SpanLink from "../../assets/styles/SpanLink";
import { Navigate, useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/api";
import UserContext from "../../contexts/UserContext";
import Lottie from "react-lottie";
import * as animationData from "./user_login.json";
import SignInWrapper from "../../assets/styles/SignInWrapper";

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
    return <Navigate to="/" />;
  }

  function updateData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
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

        navigate("/sign-in-sucess");
      })
      .catch((error) => {
        console.log(error);
        setDisabled(false);
      });
  }

  return (
    <SignInWrapper>
      <Title>Login</Title>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        color="#000000"
        height={150}
        width={150}
      />
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

        <SpanLink changeRoute={() => navigate("/sign-up")}>
          Do not have an account?
        </SpanLink>

        <Button>LOGIN</Button>
      </form>
    </SignInWrapper>
  );
}
