import classNames from "classnames/bind";
import React from "react";

import styles from "../../sass/Sidebar.module.scss";
const cx = classNames.bind(styles);

interface ItemProps {
    iconName: React.ReactNode
    title: string
    className?: string
    children?: React.ReactElement
};

export const SidebarItem = ({
    iconName,
    title,
    className,
    children,
}: ItemProps) => {
    if (!className) className = "";

    const classes = cx("item-wrapper", {
        [className]: className
    });

    return (
        <div className={classes}>
            <div className={cx("sidebar-item")}>
                <img src={`${iconName}`} />
                <p className={cx("title")}>{title}</p>
            </div>
            {children && <div className={cx("popup-item")}>
                <p className={cx("ellipsis")}>
                    <img src="./images/u_ellipsis-v.png" />
                </p>
                {children}
            </div>}
        </div>
    );
};