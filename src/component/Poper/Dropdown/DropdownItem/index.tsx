import classNames from "classnames/bind";
import { memo, useEffect, useRef, useState } from "react";

import style from "../../../../sass/Menu.module.scss";
import { ILanguage } from "../../../../types";
const cx = classNames.bind(style);

interface MenuItemProps {
    data: ILanguage
    className?: string
    handleClickOption?: any
};

function MenuItem({ data, className, handleClickOption }: MenuItemProps) {
    const { id, title } = data;
    
    return (
        <li className={cx("menu-item", className)} onClick={() => handleClickOption(data)}>
            <a>{title}</a>
        </li>
    );
};

export default memo(MenuItem);