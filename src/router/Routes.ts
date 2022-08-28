import GreetingPage from "../components/pages/GreetingPage";
import MenuPage from "../components/pages/MenuPage";
import React, {FC} from "react";

interface route{
    path: string,
    element: FC
}

export const routes:route[] = [
    {path: 'greetings', element: GreetingPage},
    {path: 'menu', element: MenuPage}
]