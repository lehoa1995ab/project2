import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const findAllProducts = createAsyncThunk("findAllProducts", async () => {
  let res = await axios.get(process.env.REACT_APP_SERVER_JSON + "products");
  return res.data;
});

//loc
const filterProduct = createAsyncThunk("filterProduct", async (type) => {
  let res = await axios.get(
    `${process.env.REACT_APP_SERVER_JSON}products?type=${type}`
  );
  return res.data;
});

const updateProduct = createAsyncThunk(
  "updateProduct",
  async (dataObj) => {
    let res = await axios.put(
      process.env.REACT_APP_SERVER_JSON + "products/",
      dataObj
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    listProducts: [],
    maxPage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findAllProducts.fulfilled, (state, action) => {
      state.listProducts = [...action.payload];
    });

    builder.addCase(filterProduct.fulfilled, (state, action) => {
      state.listProducts = [...action.payload];
    });

    builder.addMatcher(
      (action) => {
        if (action.meta) {
          return action;
        }
      },
      (state, action) => {
        if (action.meta) {
          if (action.meta.requestStatus === "pending") {
            console.log("đã vào pending của api: ", action.type);
            state.loading = true;
          }
          if (action.meta.requestStatus === "rejected") {
            console.log("đã vào rejected của api: ", action.type);
            state.loading = false;
          }
        }
      }
    );
  },
});

export const productActions = {
  ...productSlice.actions,
  findAllProducts,
  filterProduct,
  updateProduct,
  



};

export default productSlice.reducer;
