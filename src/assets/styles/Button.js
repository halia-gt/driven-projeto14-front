import styled from "styled-components";

export default function Button ({ children }) {
    return (
        <ButtonWrapper>
            { children }
        </ButtonWrapper>    
    );
}

const ButtonWrapper = styled.button`
    background: #DB3022;
    box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
    border-radius: 25px;
    width: 100%;
    height: 48px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;

    &:active {
        font-size: calc(16px / 0.97);
        transform: scale(0.97);
    }
`;