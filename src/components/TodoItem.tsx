import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { FlexContainer } from "./FlexContainer";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/useStores";
import { ITodo } from "../stores/TodoStore";
import { TodoItemStyles } from "./TodoItemStyles";
import { Button, Checkbox, IconButton, 
    TextField } from "@material-ui/core";

interface IProps {
    todo: ITodo,
};

export const TodoItem = observer(({todo}: IProps): JSX.Element => {
    const [editMode, setEditMode] = React.useState(false);
    const [formValue, setFormValue] = React.useState(todo.text);
    const { todoStore } = useStores();

    const handleSubmit = ((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo = {
            ...todo,
            text: formValue
        };
        todoStore.updateTodo(newTodo);
        setEditMode(false);
    });

    return (
        <TodoItemStyles>
            <FlexContainer>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => todoStore.toggleCompleted(todo.id)}
                />
                {!editMode && <div onClick={() => setEditMode(true)}>{todo.text}</div>}
                {editMode && (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            style={{ marginRight: 10 }}
                            value={formValue}
                            onChange={(event) => setFormValue(event.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ marginRight: 10 }}
                            >Save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            onClick={() => setEditMode(false)}
                            >Cancel
                        </Button>
                    </form>
                )}
            </FlexContainer>
    
            <main>
                <IconButton onClick={() => setEditMode(!editMode)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => todoStore.deleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </main>
        </TodoItemStyles>
    );  
});


