import classNames from "classnames/bind";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Dropdown from "../Poper/Dropdown";
import { LANGUAGE_ITEMS } from "../../constants";
import { IGlobalConstantsType, ILanguage } from "../../types";

import styles from "../../sass/Language.module.scss";
const cx = classNames.bind(styles);

export const Language = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let handler = (event: MouseEvent) => {
            if (!menuRef.current?.contains(event.target as Node))
                setOpen(false);
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    const handleItemClick = useCallback((item: IGlobalConstantsType) => {
        console.log(item);
    }, []);

    return (
        <div className={cx("container")}>
            <div ref={menuRef} className={cx("language")}>
                <div
                    className={cx("language__primary")}
                    onClick={() => setOpen(!open)}
                >
                    <span>Tiếng Việt</span>
                    <img src="./images/vietnam_flag.png" alt="viet nam" />
                    <img src="./images/angle-down.png" alt="agle down" />
                </div>
                <div className={cx('language_menu', open ? "active" : "")}>
                    <Dropdown
                        items={LANGUAGE_ITEMS}
                        handleClick={handleItemClick}
                    />
                </div>
            </div>
        </div>
    );
};