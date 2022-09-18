import styled from "styled-components";
export const ModalSnackTopBar = styled.div`
  width: 100%;
  height: 30px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: center;
  align-items: center;
  position: absolute;
  padding-left: 24px;
  color: white;
  background-color: #db3022;
  font-weight: 600;
`;
export const ModalButton = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -25%);
  background: #db3022;
  box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 28px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;
export const LottieWrapper = styled.div`
  height: 180px;
  width: 200px;
`;
