import { useContext, useState } from "react";
import styled from "styled-components";
import Input from "../../assets/styles/Input";
import Button from "../../assets/styles/Button";
import Title from "../../assets/styles/Title";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { addCard } from "../../services/api";

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
    const location = useLocation();

	function updateData(e) {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setDisabled(true);

		addCard(data)
		    .then((answer) => {
		        setUser(answer.data);
			setDisabled(false);
		        navigate(location.state.local);
		    })
		    .catch((error) => {
			setDisabled(false);
		        console.log(error);
		    });
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
					type="text"
					placeholder="Card number (16 digits)"
					name="cardNumber"
					value={data.cardNumber}
					minlength="16"
					maxlength="16"
					updateData={updateData}
					disabled={disabled}
				>
					Card number
				</Input>

				<Input
					type="text"
					placeholder="Expire date (MM/YY)"
					name="expireDate"
					minlength="3"
					value={data.expireDate}
					updateData={updateData}
					disabled={disabled}
				>
					Expire date
				</Input>

				<Input
					type="number"
					placeholder="CVV (3 digits)"
					minlength="3"
					name="cvv"
					value={data.cvv}
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
