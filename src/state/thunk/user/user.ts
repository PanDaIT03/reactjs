import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser, IRole } from "~/types";
import { checkLogin, getDocIdByField, getUserByDocId, resetPassword, updateUser } from "~/api/user";

interface IUpdatePassword {
    email?: string
    id?: string
    password: string
};

export const checkLoginAction = createAsyncThunk(
    'user/checkLogin',
    async (data: Pick<IUser, "userName" | "password"> & { roles: IRole[] }, thunkAPI) => {
        const { roles } = data
        const userId = await checkLogin(data);

        if (userId) {
            const user = await getUserByDocId(userId);
            return {
                user,
                roles
            };
        };
        return null;
    }
);

export const resetPasswordAction = createAsyncThunk(
    'user/resetPassword',
    async (data: IUpdatePassword, thunkAPI) => {
        if (data.id === undefined && data.email === undefined)
            return;

        if (data.email)
            var docId = await getDocIdByField("email", data.email);
        else if (data.id)
            var docId = await getDocIdByField("id", parseInt(data.id));

        let isUpdateSuccess = false;
        docId && await resetPassword(docId, data.password).then(() => {
            isUpdateSuccess = true;
        });

        if (isUpdateSuccess && docId)
            return await getUserByDocId(docId);
    }
);

export const updateUserAction = createAsyncThunk(
    'user/updateUser',
    async (data: Omit<IUser, "email" | "userName" |
        "password" | "rolesId" | "role">, thunkAPI) => {
            console.log(data);
            
        const docId = await getDocIdByField("id", parseInt(data.id));
        const userData = { ...data, idCollection: docId };

        console.log(userData);
        
        let isUpdateSuccess = false;
        docId && await updateUser(userData).then(() => {
            isUpdateSuccess = true;
        });

        if (isUpdateSuccess && docId)
            return await getUserByDocId(docId);
    }
);