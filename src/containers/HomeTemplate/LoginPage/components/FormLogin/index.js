//import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState } from "react";
export default function FormLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="Login">
            <div className="flex-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="xl" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="xl" controlId="password">
                        <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    </Form.Group>
                    <Button classname="btnLogin" block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
                <img src="./img/quangcao1.jpg"/>
            </div>
            
    </div>
    )
}