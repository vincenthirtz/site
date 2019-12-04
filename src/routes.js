import Home from "components/Home/Home";
import NotFound from "components/NotFound/NotFound";

export default [
    {
        path: "/",
        exact: true,
        name: "home",
        component: Home,
    },
    {
        path: "*",
        name: "otherwise",
        component: NotFound,
        hide: true
    }];
