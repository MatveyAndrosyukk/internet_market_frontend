import React, {FC} from 'react';
import {ITable} from "../../../../../types/types";
// @ts-ignore
import classes from "./CartBodyTable.module.css"

interface CartBodyTableProps{
    table: ITable
}

const CartBodyTable:FC<CartBodyTableProps> = ({table}) => {
    return (
        <div className={classes.table_desc}>
            <div className={classes.table}>
                Столик
            </div>
            <div className={classes.table_desc_name}>
                <div className={classes.table_data}>
                    На имя: <span>{table.name}</span>
                </div>
            </div>
            <div className={classes.table_desc_people}>
                <div className={classes.table_data}>
                    Количество человек: <span>{table.persons}</span>
                </div>
            </div>
            <div className={classes.table_desc_date}>
                <div className={classes.table_data}>
                    Число: <span>{table.date}</span>
                </div>
            </div>
            <div className={classes.table_desc_time}>
                <div className={classes.table_data}>
                    Время: <span>{table.time}</span>
                </div>
            </div>
        </div>
    );
};

export default CartBodyTable;