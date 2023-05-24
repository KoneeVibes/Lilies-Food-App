import { Context } from "../context/Context"
import { Dashboard } from "../components/Dashboard/dashboard"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { useContext } from "react"
import { theme } from "../configs/app"

export const Layout = () => {
    const { foodContainer, modal } = useContext(Context)
    return (
        <div style={{ display: "flex", position: ((foodContainer || modal) && "fixed"), background: theme.colors.white }} >
            <Sidebar />
            <Dashboard />
        </div>

    )
}