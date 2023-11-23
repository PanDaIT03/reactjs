import classNames from "classnames/bind";

import styles from "~/sass/ActionBar.module.scss";
const cx = classNames.bind(styles);

interface ActionBarItemProps {
    icon?: string
    title?: string
    className?: string
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
};

export const ActionBarItem = ({
    icon,
    title,
    className,
    onClick,
    ...passprops
}: ActionBarItemProps) => {
    if (!className) className = "";

    const classes = cx("wrapper");
    const props = {
        onClick,
        ...passprops
    };

    return (
        <div className={classes} {...props}>
            <div className={cx("icon")}>
                <img src={icon} />
            </div>
            <div className={cx("title")}>{title}</div>
        </div>
    );
};