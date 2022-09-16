import styled from "styled-components";
import Footer from "../Footer/Footer";
import Title from "../../assets/styles/Title";
import Button from "../../assets/styles/Button";

export default function Bag() {
    return (
        <Wrapper>
            <Title>My bag</Title>
            <section>
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