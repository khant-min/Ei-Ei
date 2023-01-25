import { createSlice } from "@reduxjs/toolkit";

export type theme = "light" | "dark";

export interface InitialState {
  toggle: theme;
}

export interface ActionType {
  type: string;
  payload: theme;
}

const initialState: InitialState = {
  toggle: localStorage.getItem("theme") === "LIGHT" ? "light" : "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleLightDark: (state: InitialState, action: ActionType) => {
      localStorage.setItem(
        "theme",
        action.payload === "light" ? "LIGHT" : "DARK"
      );
      state.toggle = action.payload;
    },
  },
});

export const toggling = (state: any) => state.toggleLightDark.toggle;

export const { toggleLightDark } = themeSlice.actions;

export default themeSlice.reducer;
