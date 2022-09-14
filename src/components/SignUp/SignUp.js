import { useState } from "react";
import Button from "../../assets/styles/Button";
import Input from "../../assets/styles/Input";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Name"
                    name="username"
                    value={data.username}
                    updateData={updateData}
                    disabled={disabled}
                >
                    Name
                </Input>
                <Button>SIGN UP</Button>
            </form>
        </>    
    );
}