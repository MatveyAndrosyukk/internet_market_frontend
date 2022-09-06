import React, {FC} from 'react';
// @ts-ignore
import classes from "./NavButton.module.css"

interface NavButtonProps {
    onClick: React.MouseEventHandler<HTMLAnchorElement>,
    children: React.ReactNode
}

const NavButton: FC<NavButtonProps> = (
    {
        onClick,
        children,
        ...props
    }) => {
    return (
        <div {...props} className={classes.button_block}>
            <a className={classes.button} onClick={onClick}>
                {children}
            </a>
        </div>
    );
};

export default NavButton;