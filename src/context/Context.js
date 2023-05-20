import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [foodContainer, setFoodContainer] = useState(null)
    const [navLink, setNavLink] = useState(null)

    return (
        <Context.Provider value={{ foodContainer, setFoodContainer, navLink, setNavLink }}>
            {children}
        </Context.Provider>
    )
}