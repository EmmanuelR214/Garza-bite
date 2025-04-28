import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Layout from "./Layout";

export const ProtectedRoute = () => {
    const token = Cookies.get("token");
    if (!token) {Cookies.remove("token"); return <Navigate to="/login" />}
    return <Layout />;
}