import classNames from "classnames/bind";

import style from "../../sass/Button.module.scss";
import React from "react";
const cx = classNames.bind(style);

interface IButtonProps {
    to?: string
    href?: string
    submit?: boolean
    primary?: boolean
    fill?: boolean
    size: "small" | "medium" | "large" | "extra large"
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    children: React.ReactNode
    className?: string
    buttonType: "button" | "submit"
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({
    to,
    href,
    primary,
    fill,
    size = "medium",
    leftIcon,
    rightIcon,
    children,
    className,
    buttonType = "button",
    onClick
}: IButtonProps) {
    let Comp = "button";
    const props = {
        onClick,
        type: buttonType,
    };

    if (!className) className = "";

    const classes = cx("wrapper", {
        [className]: className,
        [size]: size,
        primary,
        fill
    });

    return (
        <button className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <div className={cx("title")}>{children}</div>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </button>
    );
}

export default Button;