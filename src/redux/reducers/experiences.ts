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
      occupation: "Freelance Teacher",
      at: "Effortless English | 12/2022 - Present | online",
      description: "My position is to train students for IELTS preparation",
    },
    {
      id: 3,
      occupation: "English Speaking Club Trainer",
      at: "Home Education | 06/2022 - 09/2022 | Yangon",
      description:
        "The duty of a trainer is to share tips, have conversations in English and share information to improve students' general knowledge so that they can speak fluently and with confidence.",
    },
    {
      id: 4,
      occupation: "Assistant Teacher",
      at: "Youth of Spring | 2021 - 2022 | Yangon",
      description:
        "Checking homework and keeping an eye on students whether they study well or not. Solve problems formed between teachers and students. Drawing class timetable and lesson plans.",
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
