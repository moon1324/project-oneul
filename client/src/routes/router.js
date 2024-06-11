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
// import MyPageEdit from "../pages/myPage/MyPageEdit";
// import MyPageMain from "../pages/myPage/MyPageMain";
// import TermsOfUse from "../pages/myPage/TermsOfUse";
// import PrivacyPolicy from "../pages/myPage/PrivacyPolicy";
// import Secession from "../pages/myPage/Secession";


import InMyMind01 from "../pages/myMind/InMyMind01";
import InMyMind02 from "../pages/myMind/InMyMind02"
import InMyMind03 from "../pages/myMind/InMyMind03"
import InMyMind04 from "../pages/myMind/InMyMind04"
import InMyMind05 from "../pages/myMind/InMyMind05"
import InMyMind06 from "../pages/myMind/InMyMind06"
import CheckMyMind from "../pages/calendar/CheckMyMind";
import ModifyMyMind from "../pages/calendar/ModifyMyMind";
import DeleteMyMind from "../pages/calendar/DeleteMyMind";
import MyMindHome from "../pages/myMind/MyMindHome";
import CalendarHome from "../pages/calendar/CalendarHome";

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
                children:[
                    {
                        path:"/myMind",
                        element:<MyMindHome/>
                    },
                    {
                        path:"/myMind/inMyMind01",
                        element:<InMyMind01 index={0}/>
                    },
                    {
                        path:"/myMind/inMyMind02",
                        element:<InMyMind02 index={1}/>
                    },
                    {
                        path:"/myMind/inMyMind03",
                        element:<InMyMind03 index={2}/>
                    },
                    {
                        path:"/myMind/inMyMind04",
                        element:<InMyMind04 index={3}/>
                    },
                    {
                        path:"/myMind/inMyMind05",
                        element:<InMyMind05 index={4}/>
                     }, 
                    {
                        path:"/myMind/inMyMind06",
                        element:<InMyMind06 index={5}/>
                    },
                    
                ]
            },
            {
                path: "/calendar",
                element: <Calendar />,
                children:[
                    {
                        path:"/calendar",
                        element:<CalendarHome/>
                    },
                    {
                        path: "/calendar/checkMyMind",
                        element: <CheckMyMind />,
                    },
                    {
                        path: "/calendar/checkMyMind/modifyMyMind",
                        element: <ModifyMyMind/>,
                    },
                    {
                        path: "/calendar/checkMyMind/deleteMyMind",
                        element: <DeleteMyMind/>,
                    },
                ]
            },
            {
                path: "/myPage",
                element: <MyPage />,
                // children:[
                //     {
                //         path:"/myPage",
                //         element:<MyPageMain/>
                //     },
                //     {
                //         path:"/myPage/edit",
                //         element:<MyPageEdit/>
                //     },
                //     {
                //         path:"/myPage/termsOfUse",
                //         element:<TermsOfUse/>
                //     },
                //     {
                //         path:"/myPage/privacyPolicy",
                //         element:<PrivacyPolicy/>
                //     },
                //     {
                //         path:"/myPage/secession",
                //         element:<Secession/>

                //     }
                // ]
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

    

