import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContract } from "~/api/contract";

export const getContractAction = createAsyncThunk(
    'contract/getContract',
    async (_, thunkAPI) => {
        return await getContract();
    }
);