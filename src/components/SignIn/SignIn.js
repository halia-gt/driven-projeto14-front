import { useState, useContext } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";
import Title from "../../assets/styles/Title";
import SpanLink from "../../assets/styles/SpanLink";
import { Navigate, useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/api";
import UserContext from "../../contexts/UserContext";
import Lottie from "react-lottie";
import * as lottieUserLogin from "./user_login.json";
import * as lottie404 from "./404.json";
import SignInWrapper from "../../assets/styles/SignInWrapper";
import Modal from "react-modal";
import {
  LottieWrapper,
  ModalButton,
  ModalSnackTopBar,
} from "../../assets/styles/LoginModal";

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [isOpen, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("routtastore"));
  const customStyles = {
    content: {
      position: "absolute",
      height: "250px",
      width: "250px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  if (auth) {
    return <Navigate to="/" />;
  }

  function updateData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
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
        if (error.response.status === 401) {
          openModal();
        }
        console.log(error);
        setDisabled(false);
      });
  }

  return (
    <SignInWrapper>
      <Title>Login</Title>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="401 Login Modal"
      >
        <ModalSnackTopBar>Usuário ou senha inválida!</ModalSnackTopBar>
        <LottieWrapper>
          <Lottie
            onClick={() => closeModal()}
            options={{
              loop: true,
              autoplay: true,
              animationData: lottie404,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            color="#000000"
            height={180}
            width={180}
          />
        </LottieWrapper>
        <ModalButton onClick={() => closeModal()}>Ok</ModalButton>
      </Modal>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: lottieUserLogin,
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
