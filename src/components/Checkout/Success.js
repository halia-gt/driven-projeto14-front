import styled from "styled-components";
import Button from "../../assets/styles/Button";
import {ReactComponent as Bags} from "../../assets/img/bags.svg";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <div>
                <Bags />
                <h1>Success!</h1>
                <p>Your order will be delivered soon.<br/>Thank you for choosing our app!</p>
            </div>
            <Button click={() => navigate("/")}>CONTINUE SHOPPING</Button>
        </Wrapper>
    );
}

const Wrapper = styled.main`
    background-color: #FFFFFF;
    padding: 25px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #222222;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    svg{
        margin-top: 20vh;
        margin-bottom: 45px;
    }

    h1 {
        font-weight: 700;
        font-size: 34px;
    }

    p {
        margin-top: 10px;
        font-style: italic;
        font-size: 14px;
        line-height: 22px;
    }

`;