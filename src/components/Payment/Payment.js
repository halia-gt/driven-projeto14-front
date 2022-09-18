import { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../assets/styles/Input";
import Button from "../../assets/styles/Button";
import Title from "../../assets/styles/Title";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function Payment() {
    const { setUser } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        cardNumber: "",
        expireDate: "",
        cvv: "",
    });
    const navigate = useNavigate();

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        // addAddress(data)
        //     .then((answer) => {
        //         setUser(answer.data);
        //         navigate("/profile");
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    return (
        <Wrapper>
            <Title>Add new card</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={data.name}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Name on card
                </Input>

                <Input
                    type="number"
                    placeholder="Card number"
                    name="cardNumber"
                    value={data.address}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Card number
                </Input>

                <Input
                    type="date"
                    placeholder="Expire date"
                    name="expireDate"
                    value={data.city}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Expire date
                </Input>

                <Input
                    type="number"
                    placeholder="CVV"
                    name="cvv"
                    value={data.state}
                    updateData={updateData}
                    disabled={disabled}
                >
                    CVV
                </Input>

                <Button>ADD CARD</Button>
            </form>

            <Footer profile={true} />
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

    form {
        margin-top: 35px;
    }

    button {
        margin-top: 40px;
    }
`;  