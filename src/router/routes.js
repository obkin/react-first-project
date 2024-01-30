import Home from "../pages/Home";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";
import Error from '../pages/Error'
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
    { path: '/register', component: <Register />, exact: true },
    { path: '/login', component: <Login />, exact: true },
    { path: '*', component: <Error />, exact: true },
    
    // Redirect to login
    { path: '/', component: <Login />, exact: true },
    { path: '/posts', component: <Login />, exact: true },
];

export const privateRoutes = [
    { path: '/', component: <Home />, exact: true },
    { path: '/register', component: <Register />, exact: true },
    { path: '/login', component: <Login />, exact: true },
    { path: '/posts', component: <Posts />, exact: true },
    { path: '/posts/:id', component: <PostPage />, exact: true },
    { path: '*', component: <Error />, exact: true },
    // { path: '/user/account', component: <Home />, exact: true },
    // { path: '/user/posts', component: <Home />, exact: true },
];
