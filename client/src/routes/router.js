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
import Banner1 from "../pages/banner/Banner1";
import Banner2 from "../pages/banner/Banner2";
import Banner3 from "../pages/banner/Banner3";
import Banner4 from "../pages/banner/Banner4";
import Banner5 from "../pages/banner/Banner5";
import BannerMain from "../pages/banner/BannerMain";
import SignUpMain from "../pages/signUp/SignUpMain";
import SignUpStep1 from "../pages/signUp/SignUpStep1";
import SignUpStep2 from "../pages/signUp/SignUpStep2";
import SignUpStep3 from "../pages/signUp/SignUpStep3";
import SignUpStep4 from "../pages/signUp/SignUpStep4";
import SignUpStep5 from "../pages/signUp/SignUpStep5";
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
                element: <SignUpStep1 />,
            },
            {
                path: "/signUp/2",
                element: <SignUpStep2 />,
            },
            {
                path: "/signUp/3",
                element: <SignUpStep3 />,
            },
            {
                path: "/signUp/4",
                element: <SignUpStep4 />,
            },
            {
                path: "/signUp/5",
                element: <SignUpStep5 />,
            },
            {
                path: "/signUp/success",
                element: <SignUpSuccess />,
            },
        ],
    },
    {
        path: "/banner",
        element: <Banner />,
        children: [
            {
                path: "/banner",
                element: <BannerMain />,
            },
            {
                path: "/banner/banner1",
                element: <Banner1 />,
            },
            {
                path: "/banner/banner2",
                element: <Banner2 />,
            },
            {
                path: "/banner/banner3",
                element: <Banner3 />,
            },
            {
                path: "/banner/banner4",
                element: <Banner4 />,
            },
            {
                path: "/banner/banner5",
                element: <Banner5 />,
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
