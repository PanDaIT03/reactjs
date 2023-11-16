import classNames from "classnames/bind";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

import { Language } from "../../component/Language";
import { Input } from "../../component/Input";
import { Form } from "../../component/Form";

import styles from "../../sass/Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
const cx = classNames.bind(styles);

const user = {
    name: 'duongdai',
    password: '05102003'
};

const initialValuesLogin = {
    name: '',
    password: ''
},
    initialValuesRecover = {
        email: ''
    };

function Login() {
    const [isPassword, setIsPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [recover, setRecover] = useState(false);
    const [toggleLogin, setToggleLogin] = useState(true);

    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.user);

    const formikLogin = useFormik({
        initialValues: initialValuesLogin,
        validationSchema: Yup.object({
            name: Yup.string().required().min(5),
            password: Yup.string().required().min(8)
        }),
        onSubmit: (values) => {
            console.log(values);
            if (values.name.trim() !== user.name ||
                values.password.trim() !== user.password)
                setErrorMessage('Sai tên đăng nhập hoặc mật khẩu');
        }
    });
    const {
        errors: loginErrors,
        values: loginValues,
        touched: loginTouched,
        handleChange: handleChangeLogin,
        handleSubmit: handleSubmitLogin
    } = formikLogin;

    const formikRecover = useFormik({
        initialValues: initialValuesRecover,
        validationSchema: Yup.object({
            email: Yup.string().required('Hãy nhập email').email('Email không đúng định dạng')
        }),
        onSubmit: (values) => {
            console.log(values);
            setRecover(true);
        }
    });
    const {
        errors: recoverErrors,
        values: recoverValues,
        touched: recoverTouched,
        handleChange: handleChangeRecover,
        handleSubmit: handleSubmitRecover
    } = formikRecover;

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
        if (!toggleLogin && (loginValues.name === '' ||
            loginValues.password === ''))
            return;
        if (toggleLogin && recoverValues.email === '')
            return;

        formikLogin.setValues({ name: '', password: '' });
        formikRecover.setValues({ email: '' });
    }, [toggleLogin]);

    const handleFocus = (field: string) => {
        formikLogin.setFieldTouched(field, true);
    };

    const handleClickAction = () => {
        setToggleLogin(!toggleLogin);
    };

    return (
        <div className={cx("container")}>
            <Language />
            <div className={cx("content")}>
                <div className={cx("main-logo")}>
                    <img src="../images/logo.png" alt="main_logo" />
                </div>
                <Form
                    title="Đăng nhập"
                    buttonValue="Đăng nhập"
                    actionValue="Quên mật khẩu"
                    className={cx("form-login", toggleLogin ? "active" : "inactive")}
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

                <Form
                    title="Khôi phục mật khẩu"
                    buttonValue={!recover ? "Xác nhận" : ""}
                    actionValue="Quay lại đăng nhập"
                    className={cx("form-recover", !toggleLogin ? "active" : "inactive")}
                    handleFormSubmit={handleSubmitRecover}
                    onClickAction={handleClickAction}
                >
                    <p className={cx("hint", !recover ? "active" : "inactive")}>
                        Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
                    </p>
                    <p className={cx("hint", recover ? "active" : "inactive")}>
                        Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail.
                        Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.
                    </p>
                    {!recover &&
                        <>
                            <Input
                                id="email"
                                name="email"
                                title="Email"
                                className={cx("recover")}
                                value={recoverValues.email}
                                touched={recoverTouched.email}
                                errorMessage={recoverErrors.email}
                                onFocus={() => handleFocus("email")}
                                onChange={handleChangeRecover}
                            />
                            <p className={cx("error-message")}>{recoverErrors && recoverErrors.email}</p>
                        </>
                    }
                </Form>
            </div>
        </div>
    );
};

export default Login;