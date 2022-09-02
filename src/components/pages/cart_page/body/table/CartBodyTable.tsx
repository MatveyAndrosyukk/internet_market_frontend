import React, {FC} from 'react';
import {ITable} from "../../../../../types/types";

interface CartBodyTableProps{
    table: ITable
}

const CartBodyTable:FC<CartBodyTableProps> = ({table}) => {
    return (
        <div className='table-desc'>
            <div className='table'>
                Столик
            </div>
            <div className='table-desc-name'>
                <div className='table-data'>
                    На имя: <span>{table.name}</span>
                </div>
            </div>
            <div className='table-desc-people'>
                <div className='table-data'>
                    Количество человек: <span>{table.persons}</span>
                </div>
            </div>
            <div className='table-desc-date'>
                <div className='table-data'>
                    Число: <span>{table.date}</span>
                </div>
            </div>
            <div className='table-desc-time'>
                <div className='table-data'>
                    Время: <span>{table.time}</span>
                </div>
            </div>
        </div>
    );
};

export default CartBodyTable;