import { createSlice } from "@reduxjs/toolkit";

interface DataItem {
  name: string;
  value: number;
}

interface ClothingState {
  categories: Record<string, DataItem[]>; // تصنيفات الملابس (رجالي، نسائي، أطفال)
}

const initialState: ClothingState = {
  categories: {
    men: [
      { name: "Shirts", value: 400 },
      { name: "Jeans", value: 300 },
      { name: "Jackets", value: 250 },
      { name: "Suits", value: 450 },
      { name: "Shoes", value: 320 },
    ],
    women: [
      { name: "Dresses", value: 500 },
      { name: "Blouses", value: 350 },
      { name: "Skirts", value: 280 },
      { name: "High Heels", value: 400 },
      { name: "Bags", value: 370 },
    ],
    kids: [
      { name: "T-Shirts", value: 300 },
      { name: "Shorts", value: 250 },
      { name: "Sweaters", value: 280 },
      { name: "Shoes", value: 260 },
      { name: "Hats", value: 200 },
    ],
  },
};

const clothingSlice = createSlice({
  name: "clothing",
  initialState,
  reducers: {},
});

export default clothingSlice.reducer;
