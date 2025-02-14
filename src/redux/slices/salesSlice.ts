import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataItem {
  name: string;
  value: number;
}

interface SalesState {
  data: DataItem[];
}

const initialState: SalesState = {
  data: [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 7000 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 8000 },
    { name: "Jul", value: 7500 },
    { name: "Aug", value: 9000 },
    { name: "Sep", value: 6500 },
    { name: "Oct", value: 7200 },
    { name: "Nov", value: 8100 },
    { name: "Dec", value: 8700 },
  ],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    updateSalesData: (state, action: PayloadAction<DataItem[]>) => {
      state.data = action.payload;
    },
  },
});

export const { updateSalesData } = salesSlice.actions;
export default salesSlice.reducer;
