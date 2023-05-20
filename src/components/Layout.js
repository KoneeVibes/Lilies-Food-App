import { ContextProvider } from "../context/Context"
import { Dashboard } from "./Dashboard/dashboard"
import { Sidebar } from "./Sidebar/Sidebar"

export const Layout = () => {
    return (
        // This layout will be wrapped in a provider to give context to clicks on the sidebar that affect what happens in the dashboard
        <ContextProvider>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Dashboard />
            </div>
        </ContextProvider>
    )
}