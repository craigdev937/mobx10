import React from "react";
import { TodoList } from "../containers/TodoList";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

const StyledApp = styled.div`
    background-color: var(--dark);
    color: var(--light);
    height: 100vh;
    padding: 1rem;
`;

export const App = () => {
    return (
        <StyledApp>
            <CssBaseline />
            <TodoList />
            <ToastContainer 
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
        </StyledApp>
    );
};


