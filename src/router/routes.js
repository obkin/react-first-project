import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import UserPosts from "../pages/UserPosts";
import Error from '../pages/Error'
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
    { path: '/register', component: <Register />, exact: true },
    { path: '/login', component: <Login />, exact: true },
    { path: '*', component: <Error />, exact: true },
];

export const privateRoutes = [
    { path: '/', component: <Posts />, exact: true },
    { path: '/user-posts', component: <UserPosts />, exact: true },
    { path: '/posts/:id', component: <PostPage />, exact: true },
    { path: '/login', component: <Login />, exact: true },
    { path: '*', component: <Error />, exact: true },
    // { path: '/user/account', component: <Home />, exact: true },
    // { path: '/user/posts', component: <Home />, exact: true },
];
