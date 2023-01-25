import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import themeReducer, { toggleLightDark } from "../reducers/theme";
import archReducer from "../reducers/archievements";
import volunteerReducer from "../reducers/volunteer";
import experienceReducer from "../reducers/experiences";

export const store = configureStore({
  reducer: {
    toggleLightDark: themeReducer,
    arch: archReducer,
    vol: volunteerReducer,
    exp: experienceReducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
