import { createSlice, current } from "@reduxjs/toolkit"

import { IUser } from "../../../types"
import { checkLoginAction, resetPasswordAction } from "../../thunk";

interface InitType {
    currentUser: IUser
    loading: boolean
    status: "loggin successfully" | "loggin failed" | "password updated" |
    "password update failed" | ""
};

const initialState: InitType = {
    currentUser: {} as IUser,
    loading: false,
    status: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(checkLoginAction.pending, state => {
                state.loading = true;
            })
            .addCase(checkLoginAction.fulfilled, (state, action) => {
                if (action.payload != null) {
                    let {
                        id, firstName, lastName, dateOfBirth, email, numberPhone,
                        userName, password, rolesId } = action.payload;

                    state.currentUser = {
                        id: id, firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, email: email,
                        numberPhone: numberPhone, userName: userName, password: password, rolesId: rolesId
                    };
                    state.status = "loggin successfully";
                    state.loading = false;
                } else {
                    state.currentUser = {} as IUser;
                    state.status = "loggin failed";
                    state.loading = false;
                }
            })
            .addCase(checkLoginAction.rejected, state => {
                state.loading = false;
            })
            .addCase(resetPasswordAction.pending, state => {
                state.loading = true;
            })
            .addCase(resetPasswordAction.fulfilled, (state, action) => {
                if (action.payload != null) {
                    let {
                        id, firstName, lastName, dateOfBirth, email, numberPhone,
                        userName, password, rolesId } = action.payload;

                    state.currentUser = {
                        id: id, firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, email: email,
                        numberPhone: numberPhone, userName: userName, password: password, rolesId: rolesId
                    };
                    state.status = "password updated";
                    state.loading = false;
                } else {
                    state.currentUser = {} as IUser;
                    state.status = "password update failed";
                    state.loading = false;
                }
            })
            .addCase(resetPasswordAction.rejected, state => {
                state.loading = false;
            })
            .addDefaultCase((state) => {
                return state;
            })
    }
});

export const { } = userSlice.actions;
export const userReducer = userSlice.reducer;