import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../../assets/styles/Title";
import Footer from "../Footer/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { logout } from "../../services/routta";

export default function Profile() {
    const auth = JSON.parse(localStorage.getItem("routtastore"));
    const navigate = useNavigate();

    if (!auth) {
        return <Navigate to="/sign-in" />
    }

    function handleClick() {
        logout()
            .then(() => {
                localStorage.removeItem("routtastore");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Wrapper>
            <Title>My profile</Title>
            <NameWrapper>
                <h3>{auth.username}</h3>
                <p>{auth.email}</p>
            </NameWrapper>
            <Session>
                <DivWrapper onClick={handleClick}>
                    <h3>Logout</h3>
                    <p>Not your account? Logout</p>
                </DivWrapper>
                <IoIosArrowForward />
            </Session>
            <Footer profile={true} />
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
`;

const Session = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    svg {
        color: #9B9B9B;
    }
`;

const NameWrapper = styled.div`
    margin-top: 30px;
    font-style: italic;

    h3 {
        text-transform: capitalize;
        font-size: 18px;
        color: #222222;
    }

    p {
        font-size: 14px;
        color: #9b9b9b;
        text-decoration: underline;
    }
`;

const DivWrapper = styled(NameWrapper)`
    margin-top: 0;

    h3 {
        font-size: 16px;
    }

    p {
        font-size: 11px;
        text-decoration: none;
        margin-top: 5px;
    }
`;

