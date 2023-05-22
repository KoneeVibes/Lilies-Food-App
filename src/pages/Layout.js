import { Context } from "../context/Context"
import { Dashboard } from "../components/Dashboard/dashboard"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { useContext } from "react"

export const Layout = () => {
    const { foodContainer, modal } = useContext(Context)
    return (
        <div style={{ display: "flex", position: (foodContainer || modal) && "fixed" }}>
            <Sidebar />
            <Dashboard />
        </div>

    )
}