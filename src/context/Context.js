import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [foodContainer, setFoodContainer] = useState(null);
    const [modal, setModal] = useState(null);

    return (
        <Context.Provider value={{ foodContainer, setFoodContainer, modal, setModal }}>
            {children}
        </Context.Provider>
    )
}