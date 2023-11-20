import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { checkLogin, getDocIdByField, getUserByDocId, resetPassword } from "../../api/user";

export const checkLoginAction = createAsyncThunk(
    'user/checkLogin',
    async (data: Pick<IUser, "userName" | "password">, thunkAPI) => {
        let userId = await checkLogin(data);

        if (userId)
            return await getUserByDocId(userId);
        return null;
    }
);

export const resetPasswordAction = createAsyncThunk(
    'user/resetPassword',
    async ({ email, password }: Pick<IUser, "email" | "password">, thunkAPI) => {
        if (email === undefined)
            return;

        let isUpdateSuccess = false;
        const docId = await getDocIdByField("email", email);
        docId && await resetPassword(docId, password).then(() => {
            isUpdateSuccess = true;
        });

        if (isUpdateSuccess && docId)
            return await getUserByDocId(docId);
    }
);