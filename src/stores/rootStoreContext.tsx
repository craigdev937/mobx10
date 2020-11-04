import React from "react";
import { TodoStore } from "./TodoStore";

export const rootStoreContext = React.createContext({
    todoStore: new TodoStore()
});



