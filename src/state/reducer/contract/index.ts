import { createSlice } from "@reduxjs/toolkit";

import { getContractAction } from "~/state/thunk/contract";
import { IContract } from "~/types";

interface InitType {
    contracts: IContract[]
    loading: boolean
    status: string
};

const initialState: InitType = {
    contracts: [],
    loading: false,
    status: "get successfully" || "get failed"
};

const contractSlice = createSlice({
    name: "contract",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getContractAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getContractAction.fulfilled, (state, action) => {
                state.contracts = action.payload;
                state.loading = false;
                state.status = "get successfully";
            })
            .addCase(getContractAction.rejected, (state) => {
                state.loading = true;
                state.status = "get failed";
            })
            .addDefaultCase(state => {
                return state;
            })
    },
});

export const { } = contractSlice.actions;
export const contractReducer = contractSlice.reducer;