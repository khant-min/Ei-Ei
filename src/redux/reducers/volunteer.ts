import { createSlice } from "@reduxjs/toolkit";

export type InitialStateTypes = {
  id: number;
  date: string;
  header: string;
  organization: string;
  activity: string;
};

interface InitialState {
  volunteer: InitialStateTypes[];
}

const initialState: InitialState = {
  volunteer: [
    {
      id: 1,
      date: "2021",
      header: "FACILITATOR",
      organization: "Youth of Spring",
      activity:
        "teach and guide students and appreciate by almost all students",
    },
    {
      id: 2,
      date: "2021",
      header: "FACILITATOR",
      organization: "Youth of Spring",
      activity:
        "teach and guide students and appreciate by almost all students",
    },
    {
      id: 3,
      date: "2021",
      header: "FACILITATOR",
      organization: "Youth of Spring",
      activity:
        "teach and guide students and appreciate by almost all students",
    },
  ],
};

const volunteer = createSlice({
  name: "volunteer",
  initialState,
  reducers: {},
});

export const vol = (state: any) => state.vol.volunteer;

export default volunteer.reducer;
