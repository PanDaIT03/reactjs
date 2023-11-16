import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "../../sass/Input.module.scss";
const cx = classNames.bind(styles);

interface InputProps {
    id?: string
    name: string
    type?: "text" | "password"
    value: string
    title: string
    className?: string
    touched?: boolean,
    errorMessage?: string
    iconLeft?: string //path
    iconRight?: string //path
    iconLeftAwesome?: IconProp
    iconRightAwesome?: IconProp
    onFocus?: any
    onBlur?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onIconLeftClick?: (event: React.MouseEvent<HTMLImageElement>) => void
    onIconRightClick?: (event: React.MouseEvent<HTMLImageElement>) => void
};

export const Input = ({
    id,
    name,
    type = "text",
    value,
    title,
    className,
    touched = false,
    errorMessage,
    iconLeft,
    iconRight,
    iconLeftAwesome,
    iconRightAwesome,
    onFocus,
    onBlur,
    onChange,
    onIconLeftClick,
    onIconRightClick
}: InputProps) => {
    const props = {
        id: id,
        type: type,
        name: name,
        value: value,
        onChange,
        onFocus
    };

    if (!className) className = "";

    const classes = cx("wrapper", {
        [className]: className
    });
    const [isInValid, setIsInValid] = useState(false);

    useEffect(() => {
        if (typeof errorMessage === 'undefined')
            setIsInValid(false);
        else if (value === '' && touched)
            setIsInValid(true);
    }, [errorMessage]);

    const handleBlur = () => {
        if (typeof errorMessage !== 'undefined')
            setIsInValid(true);
        else
            setIsInValid(false);
        onBlur && onBlur();
    };

    return (
        <div className={classes}>
            <label htmlFor={id}>{title}:</label>
            <div className={cx("form-input", isInValid ? "error" : "")}>
                <input
                    {...props}
                    onBlur={handleBlur}
                />
                {(iconLeft || iconRight && value !== "") &&
                    <img
                        className={cx("icon", `${iconLeft ? "left" : "right"}`, "--cursor-pointer")}
                        src={iconLeft ? iconLeft : iconRight}
                        alt="icon eye"
                        onClick={iconLeft ? onIconLeftClick : onIconRightClick}
                    />
                }
            </div>
        </div>
    );
};