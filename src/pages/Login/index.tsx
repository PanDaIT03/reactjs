import classNames from "classnames/bind";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { useLocation, useNavigate } from "react-router-dom";

import { Input } from "../../component/Input";
import { Form } from "../../component/Form";
import { RootState, useAppDispatch } from "../../state";
import { checkLoginAction } from "../../state/thunk";

import styles from "../../sass/Login.module.scss";
import { Language } from "../../component/Language";
const cx = classNames.bind(styles);

const initialValuesLogin = {
    name: '',
    password: ''
};

function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [isPassword, setIsPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useAppDispatch();
    const userState = useSelector((state: RootState) => state.user);
    const { loading, status } = userState;

    const formikLogin = useFormik({
        initialValues: initialValuesLogin,
        validationSchema: Yup.object({
            name: Yup.string().required().min(5),
            password: Yup.string().required().min(8)
        }),
        onSubmit: (values) => {
            const { name, password } = values;
            dispatch(checkLoginAction({ userName: name, password: password }));
        }
    });
    const {
        errors: loginErrors,
        values: loginValues,
        touched: loginTouched,
        handleChange: handleChangeLogin,
        handleSubmit: handleSubmitLogin
    } = formikLogin;

    useEffect(() => {
        if (Object.keys(loginTouched).length < 2
            || Object.keys(loginErrors).length === 0) {
            setErrorMessage('');
            return;
        };

        if (loginErrors.name && loginErrors.password)
            setErrorMessage('Hãy nhập tài khoản và mật khẩu');
        else if (loginErrors.name)
            setErrorMessage('Hãy nhập tài khoản');
        else if (loginErrors.password)
            setErrorMessage('Hãy nhập mật khẩu');
        else setErrorMessage('');
    }, [loginErrors, loginTouched]);

    useEffect(() => {
        if (status === "loggin successfully")
            navigate(location.state ?? "/");

        if (status === "loggin failed")
            setErrorMessage("Sai tên đăng nhập hoặc mật khẩu");
        else
            setErrorMessage("");
    }, [userState]);

    const handleFocus = (field: string) => {
        formikLogin.setFieldTouched(field, true);
    };

    const handleClickAction = () => {
        navigate("/forgot-password");
    };

    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("main-logo")}>
                    <img src="../images/logo.png" alt="main_logo" />
                </div>
                <Form
                    title="Đăng nhập"
                    buttonValue="Đăng nhập"
                    actionValue="Quên mật khẩu"
                    className={cx("form-login")}
                    handleFormSubmit={handleSubmitLogin}
                    onClickAction={handleClickAction}
                >
                    <Input
                        id="name"
                        name="name"
                        title="Tên đăng nhập"
                        className={cx("form-row")}
                        value={loginValues.name}
                        touched={loginTouched.name}
                        errorMessage={loginErrors.name}
                        onChange={handleChangeLogin}
                        onFocus={() => handleFocus("name")}
                    />
                    <Input
                        id="password"
                        name="password"
                        title="Mật khẩu"
                        type={isPassword ? "password" : "text"}
                        value={loginValues.password}
                        touched={loginTouched.password}
                        errorMessage={loginErrors.password}
                        iconRight="./images/eye.png"
                        onFocus={() => handleFocus("password")}
                        onChange={handleChangeLogin}
                        onIconRightClick={() => setIsPassword(!isPassword)}
                    />
                    <p className={cx("error-message")}>{errorMessage && errorMessage}</p>
                    <div className={cx("remember-login")}>
                        <input id="cb-remember" type="checkbox" />
                        <label htmlFor="cb-remember">Ghi nhớ đăng nhập</label>
                    </div>
                </Form>

                {loading && <p className={cx("loading-spinner")}>
                    <PropagateLoader color="#36d7b7" />
                </p>}
            </div>
        </div>
    );
};

export default Login;