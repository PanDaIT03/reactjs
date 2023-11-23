import classNames from "classnames/bind";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Sidebar } from "../component/Sidebar";
import { Header } from "../component/Header";
import { RootState } from "~/state";

import styles from "~/sass/DefaultLayout.module.scss";
const cx = classNames.bind(styles);

interface DefaultLayoutProps {
    children: ReactNode
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    const userState = useSelector((state: RootState) => state.user);
    const { currentUser } = userState;

    const [account, setAccount] = useState({
        name: "",
        role: ""
    });
    const { name, role } = account;

    useEffect(() => {
        let name = (typeof currentUser.firstName === "string"
            ? currentUser.firstName.substring(0, 1) : "") + ". " + currentUser.lastName || "";
        setAccount({ name: name, role: currentUser.role || "" });
    }, [currentUser]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("container_left")}>
                    <Sidebar />
                </div>
                <div className={cx("container_right")}>
                    <div className={cx("header")}>
                        <Header>
                            <div className={cx("account")}>
                                <div className={cx("avatar")}>
                                    <img src={`./images/${currentUser.avatar}`} />
                                </div>
                                <div className={cx("info")}>
                                    <p className={cx("name")}>{name}</p>
                                    <p className={cx("role")}>{role}</p>
                                </div>
                            </div>
                        </Header>
                    </div>
                    <div className={cx("content")}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};