import { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../assets/styles/Input";
import Button from "../../assets/styles/Button";
import Title from "../../assets/styles/Title";
import Footer from "../Footer/Footer";
import { addAddress } from "../../services/api";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function ShippingAdress() {
    const { setUser } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
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

        addAddress(data)
            .then((answer) => {
                console.log(answer.data);
                setUser(answer.data);
                navigate("/profile");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Wrapper>
            <Title>Add address</Title>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={data.name}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Full name
                </Input>

                <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={data.address}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Address
                </Input>

                <Input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={data.city}
                    updateData={updateData}
                    disabled={disabled}
                >
                    City
                </Input>

                <Input
                    type="text"
                    placeholder="State/Province/Region"
                    name="state"
                    value={data.state}
                    updateData={updateData}
                    disabled={disabled}
                >
                    State/Province/Region
                </Input>

                <Input
                    type="number"
                    placeholder="Zip Code (Postal Code)"
                    name="zipcode"
                    value={data.zipcode}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Zip Code (Postal Code)
                </Input>

                <Button>SAVE ADDRESS</Button>
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