import classNames from "classnames/bind";
import { memo } from "react";

import style from "~/sass/Menu.module.scss";
import { IGlobalConstantsType } from "~/types";
const cx = classNames.bind(style);

interface MenuItemProps {
    data: IGlobalConstantsType
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