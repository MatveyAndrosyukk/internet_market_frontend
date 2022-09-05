import React, {ChangeEventHandler, FC, FocusEventHandler} from 'react';
// @ts-ignore
import classes from './Select.module.css';
import {IOption} from "../../../types/types";

interface SelectProps {
    options: IOption[],
    defaultValue: string,
    value: string,
    onChange: ChangeEventHandler<HTMLSelectElement>,
    onBlur?:  FocusEventHandler<HTMLSelectElement>
}
const Select:FC<SelectProps> = ({options, defaultValue, value, onChange, onBlur}) => {
    return (
        <select className={classes.select} value={value} onChange={onChange} onBlur={onBlur}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
            <option value={option.value}>
                {option.name}
            </option>
            )}
        </select>
    );
};

export default Select;