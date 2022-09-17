import styled from "styled-components";
import Footer from "../Footer/Footer";
import Title from "../../assets/styles/Title";
import Button from "../../assets/styles/Button";
import { GoTrashcan } from "react-icons/go";
import { useEffect, useState } from "react";
import { deleteFromCart, getCart } from "../../services/routta";

export default function Bag() {
    const [ reload, setReload ] = useState(false);
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        getCart()
            .then((answer) => {
                setCart(answer.data);
                let sum = 0;
                answer.data.forEach(product => sum = sum + Number(product.price));
                setTotal(sum.toFixed(2));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [reload]);

    function removeFromCart(id) {
        deleteFromCart(id)
            .then(() => {
                setReload(!reload);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Wrapper>
            <Title>My bag</Title>

            <section>
                {cart.map((product, index) => (
                        <Product key={index}>
                            <img src={product.image} alt="" />
                            <div>
                                <GoTrashcan onClick={() => removeFromCart(product.productId)}/>
                                <h3>{product.name}</h3>
                                <p>Color: <span>{product.color}</span>    Size: <span>{product.size}</span></p>
                                <h4>{product.price}$</h4>
                            </div>
                        </Product>
                ))}
            </section>

            {cart.length > 0 ? (
                    <>
                        <Total>
                            <p>Total amount:</p>
                            <span>{total}$</span>
                        </Total>

                        <Button>CHECK OUT</Button>
                    </>
                ) : (
                    <Span>Your cart is empty</Span>
                )
            }


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
    position: relative;

    img {
        object-fit: cover;
        width: 104px;
    }

    div {
        padding: 12px;
        color: #222222;
        font-style: italic;
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
        margin-bottom: 3px;
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
        left: 116px;
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

const Span = styled.span`
    color: #9B9B9B;
    font-style: italic;
`;