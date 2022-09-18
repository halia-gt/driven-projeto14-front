import { useEffect } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as animationData from "./sucess.json";
export default function LoginSucess() {
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => navigate("/"), 1500);
  }, [navigate]);
  return (
    <Wrapper>
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
        height={300}
        width={250}
      />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
