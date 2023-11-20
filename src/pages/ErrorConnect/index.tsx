import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import { Language } from "../../component/Language";
import { Form } from "../../component/Form";

import styles from "../../sass/Login.module.scss";
const cx = classNames.bind(styles);

function ErrorConnect() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/forgot-password");
    };

    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("main-logo")}>
                    <img src="../images/logo.png" alt="main_logo" />
                </div>

                <Form
                    title="Không thể kết nối !!"
                    buttonValue="Yêu cầu gửi lại link"
                    actionValue="Quay lại đăng nhập"
                    className={cx("form-error")}
                    onClickAction={() => navigate(`/login`)}
                    handleFormSubmit={handleSubmit}
                >
                    <p className={cx("hint", "w-585")}>
                        Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng thử lại hoặc yêu cầu gửi lại link để đặt lại mật khẩu của bạn.
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default ErrorConnect;