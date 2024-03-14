import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Blog {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

interface dataobj {
  products: Blog[];
  total: number;
  skip: number;
  limit: number;
}

type InitialState = {
  blogs: dataobj;
  loading: boolean;
  error: string;
  isSuccess: boolean;
  brandlist: Array<string>;
};

const initialState: InitialState = {
  blogs: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  brandlist: [],
  loading: false,
  error: "",
  isSuccess: false,
};

export const getBlogs: any = createAsyncThunk(
  "/blogs/getallblogs",
  async (data: any) => {
    const products = await axios.get(
      `/products?limit=${data.limit}&skip=${data.skip}`,
    );
    return products.data;
  },
);

export const searchBlog: any = createAsyncThunk(
  "/blogs/searchblog",
  async (title: any) => {
    const product = await axios.get(`/products/search?q=${title}`);
    return product.data;
  },
);

export const deleteBlog: any = createAsyncThunk(
  "/blogs/deleteblog",
  async (id: any) => {
    const product = await axios.delete(`/products/${id}`);
    console.log(product.data);
    return product.data;
  },
);

export const getBlog: any = createAsyncThunk(
  "/blogs/getblog",
  async (id: any) => {
    const product = await axios.get(`/products/${id}`);
    console.log(product.data);
    return product.data;
  },
);

export const addBlog: any = createAsyncThunk("/blogs/addblog", async (data) => {
  const product = await axios.post(`/products/add`, data);
  console.log(product.data);
  return product.data;
});

export const updateBlog: any = createAsyncThunk(
  "/blogs/updateblog",
  async (data: any) => {
    const product = await axios.patch(`/products/${data.id}`, data);
    console.log(product.data);
    return product.data;
  },
);

export const getfilterBlog: any = createAsyncThunk(
  "/blogs/filterblog",
  async (category: string) => {
    const products = await axios.get(`/products/category/${category}`);
    console.log(products.data);
    const arr: Array<string> = [];
    products.data.products.map((item: Blog) => {
      if (!arr.includes(item.brand)) {
        arr.push(item.brand);
      }
    });
    console.log(arr);
    products.data.brandlist = arr;
    return products.data;
  },
);

export const getBlogbyBrand: any = createAsyncThunk(
  "/blogs/blogbybrand",
  async (brand: string) => {
    console.log(brand);
    const products = await axios.get(`/products/search?q=${brand}`);
    console.log(products.data);
    return products.data;
  },
);

const blogsSlice: any = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // addBlog: (state, action: PayloadAction<Blog>) => {
    //   return [action.payload, ...state];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isSuccess = false;
      state.loading = true;
    }),
      builder.addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.blogs.products = payload.products;
        state.blogs.total = payload.total;
        state.isSuccess = true;
        state.loading = false;
      }),
      builder.addCase(getBlogs.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      }),
      builder.addCase(deleteBlog.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(deleteBlog.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(deleteBlog.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      }),
      builder.addCase(getBlog.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(getBlog.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(getBlog.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      }),
      builder.addCase(updateBlog.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(updateBlog.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(updateBlog.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      }),
      builder.addCase(searchBlog.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(searchBlog.fulfilled, (state, { payload }) => {
        state.blogs.products = payload.products;
        state.blogs.total = payload.total;
        state.loading = false;
      }),
      builder.addCase(searchBlog.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      }),
      builder.addCase(addBlog.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(addBlog.fulfilled, (state) => {
        state.loading = false;
      }),
      builder.addCase(addBlog.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      }),
      builder.addCase(getfilterBlog.pending, (state) => {
        state.isSuccess = false;
        state.loading = true;
      }),
      builder.addCase(getfilterBlog.fulfilled, (state, { payload }) => {
        state.blogs.products = payload.products;
        state.brandlist = payload.brandlist;
        state.blogs.total = payload.total;
        state.isSuccess = true;
        state.loading = false;
      }),
      builder.addCase(getfilterBlog.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      });
    builder.addCase(getBlogbyBrand.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getBlogbyBrand.fulfilled, (state, { payload }) => {
        state.blogs.products = payload.products;
        state.blogs.total = payload.total;
        state.loading = false;
      }),
      builder.addCase(getBlogbyBrand.rejected, (state, action) => {
        state.error = action.error.message || "something went wrong";
        state.loading = false;
      });
  },
});

// export const { removeBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
