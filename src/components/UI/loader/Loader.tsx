import React from 'react';
// @ts-ignore
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div>
            <div className={classes.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;