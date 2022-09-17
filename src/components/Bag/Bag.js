import styled from "styled-components";
import Footer from "../Footer/Footer";
import Title from "../../assets/styles/Title";
import Button from "../../assets/styles/Button";
import { GoTrashcan } from "react-icons/go";

export default function Bag() {
    return (
        <Wrapper>
            <Title>My bag</Title>

            <section>
                <Product>
                    <img src="https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                    <div>
                        <GoTrashcan />
                        <h3>Pullover</h3>
                        <p>Color: <span>Black</span>    Size: <span>L</span></p>
                        <h4>30.43$</h4>
                    </div>
                </Product>
                <Product>
                    <img src="https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                    <div>
                        <GoTrashcan />
                        <h3>Pullover</h3>
                        <p>Color: <span>Orange</span>    Size: <span>L</span></p>
                        <h4>29.99$</h4>
                    </div>
                </Product>
                <Product>
                    <img src="https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                    <div>
                        <GoTrashcan />
                        <h3>Pullover</h3>
                        <p>Color: <span>Striped</span>    Size: <span>L</span></p>
                        <h4>11.99$</h4>
                    </div>
                </Product>
            </section>

            <Total>
                <p>Total amount:</p>
                <span>124$</span>
            </Total>

            <Button>CHECK OUT</Button>
            <Footer bag={true} />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    height: 100%;
    width: 100vw;
    padding: 8px 16px;
    margin-bottom: 100px;

    h2 {
        margin-top: 60px;
    }

    section {
        margin: 25px 0;
    }
`;

const Product = styled.section`
    height: 104px;
    width: 100%;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
    border-radius: 8px;

    img {
        object-fit: cover;
        object-position: 50% 0;
        width: 104px;
        height: 104px;
    }

    div {
        padding: 12px;
        color: #222222;
        font-style: italic;
        position: relative;
        width: 100%;
    }

    svg {
        color: #9b9b9b;
        font-size: 16px;
        position: absolute;
        right: 12px;
        top: 12px;
    }

    h3 {
        font-size: 16px;
    }

    p {
        font-size: 11px;
        color: #9b9b9b;
    }

    span {
        color: #222222;
        margin-right: 10px;
    }

    h4 {
        font-weight: 700;
        font-style: none;
        position: absolute;
        bottom: 12px;
        left: 12px;
    }
`;

const Total = styled.section`
    display: flex;
    justify-content: space-between;
    font-weight: 500;

    p {
        font-size: 14px;
        color: #9B9B9B;
    }

    span {
        font-size: 18px;
        font-style: italic;
        color: #222222;
    }
`;