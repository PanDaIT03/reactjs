import classNames from "classnames/bind";
import { ReactNode } from "react";

import { Language } from "../../component/Language";
import styles from "../../sass/HeaderOnly.module.scss";
const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: ReactNode
};

export const HeaderOnly = ({ children }: DefaultLayoutProps) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <Language />
            </div>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    );
};