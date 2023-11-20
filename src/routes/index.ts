import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ErrorConnect from "../pages/ErrorConnect";
import ForgotPassword from "../pages/ForgotPassword";
import { DefaultLayout } from "../layout/DefaultLayout";
import { HeaderOnly } from "../layout/HeaderOnly";

const publicRoutes = [
    { path: '/login', component: Login },
    { path: '/error', component: ErrorConnect, layout: null },
    { path: '/reset-password', component: ResetPassword },
    { path: '/forgot-password', component: ForgotPassword }
    // { path: '/', component: Home, layout: DefaultLayout }
];

const protectedRoutes = [
    { path: '/', component: Home, layout: DefaultLayout }
    // { path: '/error', component: ErrorConnect, layout: HeaderOnly },
];

export { publicRoutes, protectedRoutes };