import Home from "../pages/Home";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ErrorConnect from "../pages/ErrorConnect";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/reset-password', component: ResetPassword },
    { path: '/error', component: ErrorConnect },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };