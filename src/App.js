import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/Home";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard/:id" element={<Dashboard />} />
            </Routes>
        </>

    )
}