import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import UserPosts from "../pages/UserPosts";
import Error from '../pages/Error'
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

export const publicRoutes = [
    { path: '/register', component: <Register />, exact: true },
    { path: '/login', component: <Login />, exact: true },
    { path: '*', component: <Login />, exact: true },
];

export const privateRoutes = [
    { path: '/', component: <Posts />, exact: true },
    { path: '/user', component: <User />, exact: true },
    { path: '/user/posts', component: <UserPosts />, exact: true },
    { path: '/post/:id', component: <PostPage />, exact: true },
    { path: '*', component: <Error />, exact: true },
    // { path: '/user/posts', component: <Home />, exact: true },
];
