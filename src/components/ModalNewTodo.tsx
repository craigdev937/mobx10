import React from "react";
import { useStores } from "../stores/useStores";
import { ModalNewTodoStyles } from "./ModalNewTodoStyles";
import { Modal, Button, TextField } from "@material-ui/core";

interface IProps {
    isOpen: boolean,
    closeModal: () => void;
};

export const ModalNewTodo = 
({ isOpen, closeModal }: IProps): JSX.Element => {
    const [text, setText] = React.useState("");
    const { todoStore } = useStores();

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        todoStore.addTodo(newTodo);
        closeModal();
    };

    return (
        <Modal 
            aria-labelledby="modal-new-todo" 
            open={isOpen} 
            onClose={closeModal}
        >
            <ModalNewTodoStyles>
                <h2 id="modal-new-todo">Add new Todo</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        id="standard-basic"
                        autoFocus
                        label="Todo"
                        fullWidth
                        onChange={handleChange}
                    />
                    <Button
                        disabled={text.length === 0}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "1rem" }}
                        >Submit
                    </Button>
                </form>
            </ModalNewTodoStyles>
        </Modal>
    );
};


