import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [foodContainer, setFoodContainer] = useState(null);
    const [modal, setModal] = useState(null);
    const [showSideBar, setShowSideBar] = useState(false)
    const [items, setItems] = useState(Object.keys(sessionStorage).filter((key) => {
        return (
            key !== "user"
        )
    }));

    return (
        <Context.Provider value={{ foodContainer, setFoodContainer, modal, setModal, items, setItems, showSideBar, setShowSideBar }}>
            {children}
        </Context.Provider>
    )
}