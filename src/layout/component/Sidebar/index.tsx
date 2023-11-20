import classNames from "classnames/bind";

import Dropdown from "../../../component/Poper/Dropdown";
import { IGlobalConstantsType } from "../../../types/GlobalConstantsType";
import { SIDEBAR_ITEMS } from "../../../constants";
import { SidebarItem } from "../../../component/SidebarItem";

import styles from "../../../sass/Sidebar.module.scss";
const cx = classNames.bind(styles);

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