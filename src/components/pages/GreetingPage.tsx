import React, {FC, useState} from 'react';
import Navbar from "../Navbar";
import MenuPage from "./MenuPage";
import History from "../History";
import BookTable from "../BookTable";
import Modal from "../UI/modal/Modal";
import BookTableModal from "../UI/modal/book_table_modal/BookTableModal";

const GreetingPage:FC = () => {
    return (
        <div>
            <Navbar/>
            <History/>
        </div>
    );
};

export default GreetingPage;