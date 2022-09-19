import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../assets/styles/Button";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { submitOrder } from "../../services/api";

export default function Checkout({ total }) {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	const delivery = 15;
	const summary = Math.ceil(Number(total) + delivery).toFixed(2);
	const location = useLocation();

	function handleClick() {
		if(!user.address) {
			alert("Please, add an address before ordering");
			return;
		}

		if(!user.card) {
			alert("Please, add a card before ordering");
			return;
		}

		submitOrder(location.state.cart)
			.then(() => {
				navigate("/success");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<Wrapper>
			<header>
				<IoIosArrowBack onClick={() => navigate("/bag")} />
				<h2>Checkout</h2> 
			</header>

			<section>
				<h3>Shipping address</h3>
				<div>
					{user.address ?
						<>
							<h4>{user.address.name}</h4>
							<p>{user.address.address} <br /> {user.address.city}, {user.address.state} {user.address.zipcode}</p>
						</> : <p className="red" onClick={() => navigate("/shipping", {state: {local: "/checkout"}})}>Add an address</p>
					}
				</div>

				<h3>Payment</h3>
				<div>
					{user.card ?
						<>
							<h4>Credit card</h4>
							<p>**{user.card.cardNumber.substring(14)}</p>
						</> : <p className="red" onClick={() => navigate("/payment", {state: {local: "/checkout"}})}>Add a card</p>
					}
				</div>
			</section>

			<TotalPrice>
				<p>Order: <span>{total}$</span></p>
				<p>Delivery: <span>{delivery.toFixed(2)}$</span></p>
				<p>Summary: <span>{summary}$</span></p>

			</TotalPrice>

			<Button click={handleClick}>SUBMIT ORDER</Button>

		</Wrapper>
	);
}

const Wrapper = styled.main`
	height: 100%;
	width: 100vw;
	padding: 8px 16px;
	margin-bottom: 100px;
	position: relative;

	header {
	  width: 100vw;
		height: 55px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		font-style: italic;
		top: 0;
		z-index: 1;
		left: 0;
		background-color: #F9F9F9;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.08),
			0 4px 4px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.08);
	}

  svg {
		font-size: 1.5em;
		position: absolute;
		top: 17px;
		left: 10px;
	}

	h2 {
		font-size: 18px;
		color: #222222;
	}

	section {
		margin-top: 85px;
		color: #222222;
		font-style: italic;
	}

	h3 {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	div {
		padding: 18px 28px;
		width: 100%;
		height: 108px;
		background-color: #FFFFFF;
		border-radius: 8px;
		box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
		font-size: 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-bottom: 55px;
	}

	h4 {
		font-weight: 500;
	}

	p {
		line-height: 150%;
	}

	button {
		margin-top: 25px;
	}

    .red {
        color: #DB3022;
    }
`;

const TotalPrice = styled.span`
	font-size: 14px;
	font-style: italic;
	margin-bottom: 25px;

	p {
		color: #9b9b9b;
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}

	span {
		color: #222222;
		font-weight: 500;
	}

	p:last-child {
		font-size: 16px;
	}
`;