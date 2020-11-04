import { makeObservable, observable, computed, 
    action } from "mobx";
import { toast } from "react-toastify";

export interface ITodo {
    id: number,
    text: string,
    completed: boolean,
};

export class TodoStore {
    @observable
    public todos: ITodo[] = [
        { id: 1, text: "todo 1", completed: true },
        { id: 2, text: "todo 2", completed: false },
        { id: 3, text: "todo 3", completed: false }
    ];

    public constructor() {
        makeObservable(this);
    };

    @action
    public addTodo = (todo: ITodo) => {
        this.todos.push(todo);
        toast.success("New Todo added", {
            position: toast.POSITION.BOTTOM_CENTER
        })
    };

    @action
    public toggleCompleted = (id: number) => {
        const updatedTodos = this.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.todos = updatedTodos;
    };

    @action
    public updateTodo = (updatedTodo: ITodo) => {
        const updatedTodos = this.todos.map((todo) => {
            if (todo.id === updatedTodo.id) {
                return { ...updatedTodo };
            }
            return todo;
        });
        this.todos = updatedTodos;
    };

    @action
    public deleteTodo = (id: number) => {
        const updatedTodos = this.todos.filter(
            (todo) => todo.id !== id);
        this.todos = updatedTodos;
        toast.info("Todo deleted", {
            position: toast.POSITION.BOTTOM_CENTER
        })
    };

    @computed
    get todoProgress() {
        const completedCount = this.todos.filter((type) => 
            type.completed).length;
        const totalCount = this.todos.length;
        return `${completedCount} / ${totalCount}`;
    };

    @computed
    get completedTodos() {
        return this.todos.filter((todo) => todo.completed);
    };

    @computed
    get incompleteTodos() {
        return this.todos.filter((todo) => !todo.completed);
    };
};





