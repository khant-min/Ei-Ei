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
      date: "2021-2022",
      header: "FACILITATOR",
      organization: "Colorful youth",
      activity: "Well performed to satisfy the orginization",
    },
    {
      id: 2,
      date: "2021-2022",
      header: "FREELANCE TEACHER",
      organization: "Youth of Spring",
      activity:
        "Teach and guide students and appreciate by almost all students",
    },
    {
      id: 3,
      date: "06/2022 - 09/2022",
      header: "SPEAKING CLASS TRAINER",
      organization: "Home Education",
      activity:
        "Have fluency in speaking and have the ability to use most teaching based applications",
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
