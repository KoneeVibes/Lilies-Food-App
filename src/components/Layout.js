import { ContextProvider } from "../context/Context"
import { Dashboard } from "./Dashboard/dashboard"
import { Sidebar } from "./Sidebar/Sidebar"

export const Layout = () => {
    return (
        <ContextProvider>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Dashboard />
            </div>
        </ContextProvider>
    )
}