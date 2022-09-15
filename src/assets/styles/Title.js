import styled from "styled-components";

export default function Title({ children }) {
    return (
        <TitleWrapper>
            { children }
        </TitleWrapper>
    );
}

const TitleWrapper = styled.h2`
    color: #222222;
    font-size: 34px;
    font-weight: 700;
`;