import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRole } from "~/api/role";

export const getRoleAction = createAsyncThunk(
    'role/getRole',
    async (_, thunkAPI) => {
        return await getRole();
    }
);