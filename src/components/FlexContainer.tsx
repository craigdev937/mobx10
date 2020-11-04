import React from "react";

interface IProps {
    children: React.ReactNode,
    display?: "flex",
    justifyContent?: string,
    alignItems?: string,
};

export const FlexContainer = ({
    children, display = "flex",
    justifyContent = "space-between",
    alignItems = "center"
}: IProps) => {
    return (
        <main style={{ display, justifyContent, alignItems }}>
            {children}
        </main>
    );
};



