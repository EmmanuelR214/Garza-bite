import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import NotFound from "./NotFound";
import Loader from "../components/Loader";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = lazy(() => import("../views/Home"));
const Menu = lazy(() => import("../views/Menu"));
const Cart = lazy(() => import("../views/Cart"));
const Login = lazy(() => import("../views/Login"));
const FinishPayment = lazy(() => import("../views/FinishPayment"));
const ConfirmPay = lazy(() => import("../views/ConfirmPay"));
const Ordenes = lazy(() => import("../views/Ordenes"));

export const router = createBrowserRouter([
    {
        path: "/login", // 🔵 Ahora login va solito, fuera de protección
        element: (
            <Suspense fallback={<Loader />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: "/", // 🔒 Ahora sí, todas las demás protegidas
        element: (
            <ProtectedRoute/>
        ),
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "/menu",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Menu />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: "/finishPayment",
                element: (
                    <Suspense fallback={<Loader />}>
                        <FinishPayment />
                    </Suspense>
                ),
            },
            {
                path: "/confirmPay",
                element: (
                    <Suspense fallback={<Loader />}>
                        <ConfirmPay />
                    </Suspense>
                ),
            },
            {
                path: "/ordenes",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Ordenes />
                    </Suspense>
                ),
            },
        ],
    },
]);
