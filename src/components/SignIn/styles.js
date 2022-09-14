import styled from "styled-components";

const Wrapper = styled.main`
    height: 100%;

    svg {
        color: #222222;
        font-size: 24px;
    }

    h2 {
        margin-top: 35px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 60vh;
    }

    span {
        margin-top: 18px;
        margin-bottom: 30px;
    }
`;

export default Wrapper;