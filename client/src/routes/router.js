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
import MyPageEdit from "../pages/myPage/MyPageEdit";
import MyPageMain from "../pages/myPage/MyPageMain";
import TermsOfUse from "../pages/myPage/TermsOfUse";
import PrivacyPolicy from "../pages/myPage/PrivacyPolicy";
import Secession from "../pages/myPage/Secession";
import SignUpMain from "../pages/signUp/SignUpMain";
import SignUpEmailPw from "../pages/signUp/SignUpEmailPw";
import SignUpNameMobile from "../pages/signUp/SignUpNameMobile";
import SignUpNickname from "../pages/signUp/SignUpNickname";
import SignUpProfileImg from "../pages/signUp/SignUpProfileImg";
import SignUpOrigin from "../pages/signUp/SignUpOrigin";
import SignUpSuccess from "../pages/signUp/SignUpSuccess";

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
            },
            {
                path: "/calendar",
                element: <Calendar />,
            },
            {
                path: "/myPage",
                element: <MyPage />,
                children: [
                    {
                        path: "/myPage",
                        element: <MyPageMain />,
                    },
                    {
                        path: "/myPage/edit",
                        element: <MyPageEdit />,
                    },
                    {
                        path: "/myPage/termsOfUse",
                        element: <TermsOfUse />,
                    },
                    {
                        path: "/myPage/privacyPolicy",
                        element: <PrivacyPolicy />,
                    },
                    {
                        path: "/myPage/secession",
                        element: <Secession />,
                    },
                ],
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
        children: [
            {
                path: "/signUp",
                element: <SignUpMain />,
            },
            {
                path: "/signUp/1",
                element: <SignUpEmailPw />,
            },
            {
                path: "/signUp/2",
                element: <SignUpNameMobile />,
            },
            {
                path: "/signUp/3",
                element: <SignUpNickname />,
            },
            {
                path: "/signUp/4",
                element: <SignUpProfileImg />,
            },
            {
                path: "/signUp/5",
                element: <SignUpOrigin />,
            },
            {
                path: "/signUp/6",
                element: <SignUpSuccess />,
            },
        ],
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
