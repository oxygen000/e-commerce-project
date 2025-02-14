import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Order {
  id: string;
  customer: string;
  total: number;
  status: string;
  createdAt: string;
}

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [
    { id: "1", customer: "John Doe", total: 99.99, status: "Pending", createdAt: "2024-02-14" },
    { id: "2", customer: "Jane Smith", total: 149.49, status: "Shipped", createdAt: "2024-02-13" },
    { id: "3", customer: "Alice Brown", total: 79.99, status: "Delivered", createdAt: "2024-02-12" }
  ],
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  return initialState.orders;
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch orders";
      });
  },
});

export default orderSlice.reducer;
