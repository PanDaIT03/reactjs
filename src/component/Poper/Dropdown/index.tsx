import classNames from "classnames/bind";
import { memo } from "react";

import DropdownItem from "./DropdownItem";
import { IGlobalConstantsType } from "../../../types";

import style from "../../../sass/Menu.module.scss";
const cx = classNames.bind(style);

interface MenuProps {
    items: IGlobalConstantsType[]
    className?: string
    handleClick?: any
};

export const Dropdown = ({
    items = [],
    className,
    handleClick
}: MenuProps) => {
    if (!className) className = "";
    const classes = cx("list-menu", {
        [className]: className
    });

    const renderItems = () => (
        items.map((item, index) => {
            return <DropdownItem
                key={index}
                data={item}
                handleClickOption={handleClick}
            />
        })
    );

    return (
        <div className={classes}>
            <ul className={cx("menu-items")}>{renderItems()}</ul>
        </div>
    );
}

export default memo(Dropdown);