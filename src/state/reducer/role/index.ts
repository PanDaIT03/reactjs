import { createSlice } from "@reduxjs/toolkit";
import { getRoleAction } from "~/state/thunk/role";
import { IRole } from "~/types";

export interface InitType {
    role: IRole[]
};

const initialState: InitType = {
    role: []
};

const roleSlice = createSlice({
    name: "role",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getRoleAction.fulfilled, (state, action) => {
            state.role = action.payload;
        })
    }
});

export const { } = roleSlice.actions;
export const roleReducer = roleSlice.reducer;