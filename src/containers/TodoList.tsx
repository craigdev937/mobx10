import React from "react";
import { Container, StyledHeader, StyledTodoList } from "./TodoListStyles";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/useStores";
import { ModalNewTodo } from "../components/ModalNewTodo";
import { TodoItem } from "../components/TodoItem";
import { Button } from "@material-ui/core";

export const TodoList = observer((): JSX.Element => {
    const [modalNewTodoIsOpen, setModalNewTodoIsOpen] = React.useState(false);
    const { todoStore } = useStores();

    return (
        <React.Fragment>
            {modalNewTodoIsOpen && (
                <ModalNewTodo
                    isOpen={modalNewTodoIsOpen}
                    closeModal={() => setModalNewTodoIsOpen(false)}
                />
            )}
            <Container>
                <StyledHeader>
                    <h2>Mobx Todo</h2>
                    <Button 
                        color="secondary"
                        variant="contained"
                        onClick={() => setModalNewTodoIsOpen(true)}
                        >Add new
                    </Button>
                </StyledHeader>
                <StyledTodoList>
                    {todoStore.incompleteTodos.length === 0 
                        && <p>Nothing to do!</p>}
                    {todoStore.incompleteTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </StyledTodoList>
                <h3>Completed {todoStore.todoProgress}</h3>
                <StyledTodoList>
                    {todoStore.completedTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </StyledTodoList>
            </Container>
        </React.Fragment>
    );
});



