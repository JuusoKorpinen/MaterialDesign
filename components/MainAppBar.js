import React from "react";
import { Appbar } from "react-native-paper";

export default function Login() {
    return (
        <Appbar.Header
            mode="center-aligned"
            elevated={true}
        >
            <Appbar.Content title="Login" />
        </Appbar.Header>
    )
}