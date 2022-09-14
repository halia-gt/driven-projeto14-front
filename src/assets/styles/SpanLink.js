import styled from "styled-components";
import { CgArrowLongRight } from "react-icons/cg";

export default function SpanLink ({ children, changeRoute }) {
    return (
        <Wrapper onClick={changeRoute}>
            <p>{ children }</p>
            <CgArrowLongRight />
        </Wrapper>
    );
}

const Wrapper = styled.span`
    color: #222222;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: end;

    p {
        margin-right: 4px;
    }

    svg {
        color: #DB3022;
        font-size: 20px;
    }

    &:active {
        text-decoration: underline;
    }
`;