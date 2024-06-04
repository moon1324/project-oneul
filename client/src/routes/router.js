import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import Main from "../pages/main/Main";
import Banner from "../pages/banner/Banner";
import Search from "../pages/search/Search";
import OurToday from "../pages/ourToday/OurToday";
import MyMind from "../pages/myMind/MyMind";
import Calendar from "../pages/calendar/Calendar";
import MyPage from "../pages/myPage/MyPage";
import PageNotFound from "../pages/error/PageNotFound";
import WriteToday from "../pages/ourToday/WriteToday";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/ourToday",
                element: <OurToday />,

            },
            {
                path: "/writeToday",
                element: <WriteToday />,
            },
            {
                path: "/myMind",
                element: <MyMind />,
            },
            {
                path: "/calendar",
                element: <Calendar />,
            },
            {
                path: "/myPage",
                element: <MyPage />,
            },
        ],
    },
    {
        path: "/logIn",
        element: <LogIn />,
    },
    {
        path: "/signUp",
        element: <SignUp />,
    },
    {
        path: "/banner",
        element: <Banner />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
