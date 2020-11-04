import React from "react";
import { rootStoreContext } from "./rootStoreContext";

export const useStores = () => React.useContext(
    rootStoreContext
);




