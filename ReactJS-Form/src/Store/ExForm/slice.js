import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stdList: [
    {
      id: "1",
      fullName: "Nguyễn Quang Trường",
      phoneNumber: "0376358421  ",
      email: "nqtruong2210@gmail.com",
    },
    {
      id: "2",
      fullName: "Vũ Thanh Thảo",
      phoneNumber: "**********",
      email: "vuthanhthao@gmail.com",
    },
    {
      id: "3",
      fullName: "Nguyễn Bá Lộc",
      phoneNumber: "**********",
      email: "nguyenbaloc@gmail.com",
    },
    {
      id: "4",
      fullName: "Phạm Minh Quang",
      phoneNumber: "**********",
      email: "phamminhquang@gmail.com",
    },
    {
      id: "5",
      fullName: "Nguyễn Thanh Tùng",
      phoneNumber: "**********",
      email: "nguyenthanhtung@gmail.com",
    },
  ],
  stdEdit: undefined,
};

export const ExFormSlice = createSlice({
  name: "ExForm",
  initialState,
  reducers: {
    createStd: (state, { payload }) => {
      state.stdList.push(payload);
    },
    deleteStd: (state, { payload }) => {
      state.stdList = state.stdList.filter((std) => std.id !== payload);
    },
    setEditStd: (state, { payload }) => {
      state.stdEdit = payload;
    },
    editStd: (state, { payload }) => {
      const stdIndex = state.stdList.findIndex(
        (item) => item.id === payload.id
      );

      if (stdIndex !== -1) {
        state.stdList[stdIndex] = payload;
        state.stdEdit = undefined;
      }
    },
  },
});

export const { reducer: exFormReducer, actions: exFormActions } = ExFormSlice;
