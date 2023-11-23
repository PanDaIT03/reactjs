import classNames from "classnames/bind";

import Dropdown from "~/component/Poper/Dropdown";
import { IGlobalConstantsType } from "~/types/GlobalConstantsType";
import { SIDEBAR_ITEMS } from "~/constants";

import styles from "~/sass/Sidebar.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

interface SidebarItemProps {
    iconName: React.ReactNode
    title: string
    className?: string
    children?: React.ReactElement
};

const SidebarItem = ({
    iconName,
    title,
    className,
    children,
}: SidebarItemProps) => {
    if (!className) className = "";

    const [visible, setVisible] = useState(false);
    const classes = cx("item-wrapper", {
        [className]: className,
        visible
    });
    
    return (
        <div
            className={classes}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div className={cx("sidebar-item")}>
                <img src={`${iconName}`} className={cx("menu-icon")} />
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

export const Sidebar = () => {
    const handleClickOption = (item: IGlobalConstantsType) => {
        console.log(item);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("logo")}>
                <img src="./images/logo.png" />
            </div>
            <div className={cx("sidebar-items")}>
                {SIDEBAR_ITEMS.map((item, index) => (
                    <SidebarItem
                        key={index}
                        iconName={item.iconName}
                        title={item.title}
                    >
                        {item.children && (
                            <Dropdown
                                items={item.children}
                                className={cx("sidebar")}
                                handleClick={handleClickOption}
                            />
                        )}
                    </SidebarItem>
                ))}
            </div>
        </div>
    )
};