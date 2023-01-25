import { createSlice } from "@reduxjs/toolkit";

export interface ExpInitialStateTypes {
  id: number;
  occupation: string;
  at: string;
  description: string;
}

interface ExpInitialState {
  experiences: ExpInitialStateTypes[];
  // experiences: Array<ExpInitialStateTypes>;
}

const initialState: ExpInitialState = {
  experiences: [
    {
      id: 1,
      occupation: "Teacher",
      at: "Pakokku",
      description:
        "I've taught three years and have experiences of how to handle students",
    },
    {
      id: 2,
      occupation: "Facilitator",
      at: "Colorful Youth, Yangon",
      description:
        "Work as a Facilitator for three months and can use digital tools and google classroom properly",
    },
    {
      id: 3,
      occupation: "English Speaking Club Trainer",
      at: "Home Education, Yangon",
      description:
        "Play a role as a trainer for three months and have skills for applying Microsoft applications and zoom app",
    },
    {
      id: 4,
      occupation: "Freelance Tutor",
      at: "Youth of Spring, Yangon",
      description:
        "Have the essential skills to guide students and know teaching methods which are crucial in teaching",
    },
  ],
};

const experienceSlice = createSlice({
  name: "exp",
  initialState,
  reducers: {},
});

export const experiences = (state: any) => state.exp.experiences;

export default experienceSlice.reducer;
