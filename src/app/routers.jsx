import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.jsx";
import RegisterPage from "../pages/auth/registerPage/registerPage.jsx";
import RegFirst from "../pages/auth/registerPage/Regfirst/regfirst.jsx";
import ITSolutions from "../pages/itsection/Itsection.jsx";
import Mobilo from "../pages/mobilograhy/Mobilograhy.jsx";
import Drone from "../pages/drone/Drone.jsx";
import Cybersport from "../pages/cybersport/Cybersport.jsx";
import Hacker from "../pages/hacker/hacker.jsx";
import Design from "../pages/design/Design.jsx";
import Robot from "../pages/robo/Robot.jsx";
import Expo from "../pages/expo/Expo.jsx";


export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainPage /> 
    },
    {
        path: '/itsolve',
        element: <ITSolutions />
    },
    {
        path: '/mobilo',
        element: <Mobilo />
    },
    {
        path: '/dron-race',
        element: <Drone />
    },
    {
        path: '/cyber',
        element: <Cybersport />
    }, {
        path: '/hacker',
        element: <Hacker />
    }, {
        path: '/design',
        element: <Design />
    },
    {
        path: '/robot',
        element: <Robot />
    },
    {
        path: '/expo',
        element: <Expo />
    },

    {
        path: '/next-step',
        element: <RegFirst/> 
    }
]);
