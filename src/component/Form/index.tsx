import classNames from "classnames/bind";

import styles from "../../sass/Form.module.scss";
import Button from "../Button";
const cx = classNames.bind(styles);

interface FormProps {
    title: string
    children?: React.ReactNode
    buttonValue: string
    btnType?: "button" | "submit"
    actionValue?: string
    className?: string
    onClickAction?: (event: React.MouseEvent<HTMLDivElement>) => void
    handleFormSubmit?: (event: React.MouseEvent<HTMLFormElement>) => void
}

export const Form = ({
    title,
    children,
    buttonValue,
    btnType = "submit",
    actionValue,
    className,
    onClickAction,
    handleFormSubmit,
}: FormProps) => {
    if (!className) className = "";

    const classes = cx("wrapper", {
        [className]: className
    });

    return (
        <div className={classes}>
            <div className={cx("title")}>{title}</div>
            <form className={cx("form")} onSubmit={handleFormSubmit}>
                {children}

                {buttonValue !== "" &&
                    <Button primary fill size="large" buttonType={btnType}>
                        {buttonValue}
                    </Button>
                }
            </form>
            {actionValue && <div
                className={cx("action")}
                onClick={onClickAction}
            >
                {actionValue}
            </div>}
        </div>
    );
};