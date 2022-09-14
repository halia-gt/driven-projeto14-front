import styled from "styled-components";

export default function Input ({ children, type, placeholder, name, updateData, value, disabled }) {
    return (
        <LabelWrapper>
            { value.length > 0 ? children : null }
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={updateData}
                disabled={disabled}
                required
            />
        </LabelWrapper>
    );
}

const LabelWrapper = styled.label`
    background-color: #FFFFFF;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 8px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #9B9B9B;
    font-size: 11px;
    padding: 12px 20px;
    font-weight: 400;
    font-style: italic;
    height: 63px;

    &:disabled {
        background-color: #F2F2F2;
    }

    input {
        margin: 3px 0;
        font-size: 14px;
        line-height: 20px;
        color: #2D2D2D;
        font-weight: 700;
    }

    input::placeholder {
        color: #9B9B9B;
    }
`;