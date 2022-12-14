import React, {FC, useState} from 'react';
import History from "./history/History";
import Cooks from "./cooks/Cooks";
import Footer from "../../UI/footer/Footer";
import Menu from "./menu/Menu";
import GreetingNavbar from "./navbar/GreetingNavbar";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const GreetingPage: FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const [registrationModal, setRegistrationModal] = useState<boolean>(false)
    const {user} = useTypedSelector(state => state.user)

    return (
        <div>
            <GreetingNavbar
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}
            />
            <History/>
            <Menu/>
            <Cooks/>
            <Footer
                modal={modal}
                setModal={setModal}
                registrationModal={registrationModal}
                setRegistrationModal={setRegistrationModal}/>
        </div>
    );
};

export default GreetingPage;