import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.jsx";
import RegisterPage from "../pages/auth/registerPage/registerPage.jsx";
import RegFirst from "../pages/auth/registerPage/Regfirst/regfirst.jsx";
import NoPage from "../pages/noPage/noPAge.jsx";


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/register',
        element: <RegisterPage /> 
    },  {
        path: '/next-step',
        element: <RegFirst/> 
    },  {
        path: '/*',
        element: <NoPage/> 
    }
]);
