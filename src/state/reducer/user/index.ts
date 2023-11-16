import { createAction, createReducer } from "@reduxjs/toolkit"
import { IUser } from "../../../types"

const initialState: IUser = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    numberPhone: "",
    userName: "",
    password: "",
    rolesId: ""
};

export const checkUser = createAction<IUser>('user/checklogin');

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(checkUser, (state, action) => {

    })
});
export default userReducer;