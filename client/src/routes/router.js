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
import InMyMind01 from "../pages/myMind/InMyMind01";
import InMyMind02 from "../pages/myMind/InMyMind02";
import InMyMind03 from "../pages/myMind/InMyMind03";
import InMyMind04 from "../pages/myMind/InMyMind04";
import InMyMind05 from "../pages/myMind/InMyMind05";
import InMyMind06 from "../pages/myMind/InMyMind06";


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
                path: "/myMind",
                element: <MyMind />,
                children: [
                    {
                        path:"/myMind",
                        element:<InMyMind01/>
                    },
                    {
                        path:"/myMind/inMyMind02",
                        element:<InMyMind02/>
                    },
                    {
                        path:"/myMind/inMyMind03",
                        element:<InMyMind03/>
                    },
                    {
                        path:"/myMind/inMyMind04",
                        element:<InMyMind04/>
                    },
                    {
                        path:"/myMind/inMyMind05",
                        element:<InMyMind05/>
                    }, 
                    {
                        path:"/myMind/inMyMind06",
                        element:<InMyMind06/>
                    },
                ]
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
