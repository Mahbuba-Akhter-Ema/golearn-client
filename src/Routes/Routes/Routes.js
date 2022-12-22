import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Footer from "../../Shared/Footer/Footer";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses";
import Faqs from "../../Pages/Faqs/Faqs";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PremiumPage from "../../PremiumPage/PremiumPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:'/',
                element: <Footer></Footer>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course-categories/:id',
                loader: ({params}) => fetch(`https://go-learn-server.vercel.app/single-categories/${params.id}`),
                element:<CourseDetails></CourseDetails>
            },
            {
                path: '/faqs',
                element: <Faqs></Faqs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premiumpage/:id',
                loader: ({params}) => fetch(`https://go-learn-server.vercel.app/single-categories/${params.id}`),
                element: <PrivateRoute><PremiumPage></PremiumPage></PrivateRoute>
            }
        ]
    },
]);