import classNames from "classnames/bind";
import { ReactNode } from "react";

import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/Header";

import styles from "../../sass/DefaultLayout.module.scss";
const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: ReactNode
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("container_left")}>
                    <Sidebar />
                </div>
                <div className={cx("container_right")}>
                    <div className={cx("header")}>
                        <Header />
                    </div>
                    <div className={cx("content")}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};