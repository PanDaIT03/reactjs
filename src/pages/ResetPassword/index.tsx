import classNames from "classnames/bind";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { Language } from "../../component/Language";
import { Form } from "../../component/Form";
import { Input } from "../../component/Input";

import styles from "../../sass/Login.module.scss";
const cx = classNames.bind(styles);

const initialValuesLogin = {
    password: '',
    confirmPassword: ''
};

function ResetPassword() {
    const [isPassword, setIsPassword] = useState(true);
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const formikResetPass = useFormik({
        initialValues: initialValuesLogin,
        validationSchema: Yup.object({
            password: Yup.string().required().min(8),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Mật khẩu không khớp')
                .required()
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    const {
        errors,
        values,
        touched,
        handleChange,
        handleSubmit
    } = formikResetPass;

    useEffect(() => {
        if (Object.keys(touched).length < 2
            || Object.keys(errors).length === 0) {
            setErrorMessage('');
            return;
        };

        if (errors.confirmPassword === 'Mật khẩu không khớp')
            setErrorMessage('Mật khẩu không khớp');
        else if (errors.password)
            setErrorMessage('Hãy nhập mật khẩu');
        else if (errors.confirmPassword)
            setErrorMessage('Hãy nhập mật khẩu');
        else setErrorMessage('');
    }, [errors, touched]);

    const handleFocus = (field: string) => {
        formikResetPass.setFieldTouched(field, true);
    };

    return (
        <div className={cx("container")}>
            <Language />
            <div className={cx("content")}>
                <div className={cx("main-logo")}>
                    <img src="../images/logo.png" alt="main_logo" />
                </div>
                <Form
                    title="Đặt lại mật khẩu"
                    buttonValue="Lưu mật khẩu"
                    className={cx("form-reset-password")}
                    handleFormSubmit={handleSubmit}
                >
                    <Input
                        id="password"
                        name="password"
                        title="Mật khẩu mới"
                        className={cx("form-row")}
                        type={isPassword ? "password" : "text"}
                        value={values.password}
                        touched={touched.password}
                        errorMessage={errors.password}
                        iconRight="./images/eye.png"
                        onFocus={() => handleFocus("password")}
                        onChange={handleChange}
                        onIconRightClick={() => setIsPassword(!isPassword)}
                    />
                    <Input
                        id="confirm-password"
                        name="confirmPassword"
                        title="Nhập lại mật khẩu mới"
                        className={cx("form-row")}
                        type={isConfirmPassword ? "password" : "text"}
                        value={values.confirmPassword}
                        touched={touched.confirmPassword}
                        errorMessage={errors.confirmPassword}
                        iconRight="./images/eye.png"
                        onFocus={() => handleFocus("confirmPassword")}
                        onChange={handleChange}
                        onIconRightClick={() => setIsConfirmPassword(!isConfirmPassword)}
                    />
                    <p className={cx("error-message")}>{errorMessage && errorMessage}</p>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;