import GreetingPage from "../components/pages/greeting_page/GreetingPage";
import Menu from "../components/pages/greeting_page/menu/Menu";
import {FC} from "react";

interface route{
    path: string,
    element: FC
}

export const routes:route[] = [
    {path: 'greetings', element: GreetingPage},
    {path: 'menu', element: Menu}
]