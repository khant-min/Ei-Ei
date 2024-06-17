import { createSlice } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  id: number;
  date: string;
  header: string;
  content: string;
}

interface InitialState {
  archievements: InitialStateTypes[];
}

const initialState: InitialState = {
  archievements: [
    {
      id: 1,
      date: " Sun Jan 22 2023",
      header: "Certificate of finishing basic computer skills",
      content:
        "I can apply computer and computer-based applications in advance",
    },
    {
      id: 2,
      date: "Sun Jan 22 2023",
      header: "Certificate of finishing advanced excel",
      content:
        "Can make list of students properly and also serve as an accoutant",
    },
    {
      id: 3,
      date: "Sun Jan 22 2023",
      header: "Finishing IELTS foundation",
      content: "have knowledge about IELTS exam and can share it to students",
    },
    {
      id: 4,
      date: "Sun Jan 22 2023",
      header:
        "Certificate of having advanced level C1 in English by british council",
      content: "Know English pretty well and fluent in speaking",
    },
  ],
};

const archSlice = createSlice({
  name: "archievements",
  initialState,
  reducers: {},
});

export const archievements = (state: any) => state.arch.archievements;

export default archSlice.reducer;
