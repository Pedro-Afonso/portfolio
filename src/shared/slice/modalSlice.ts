import { createSlice } from "@reduxjs/toolkit";
import { IProjectData } from "../config/projects";

interface IModalState {
  [x: string]: {
    isVisible: boolean;
    projectData: IProjectData | null;
  };
}

const initialState: IModalState = {
  projectDetails: {
    isVisible: false,
    projectData: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleProjectDetailst: (state, action) => {
      state.projectDetails.isVisible = !state.projectDetails.isVisible;
      state.projectDetails.projectData = action.payload;
    },
  },
});

export const { toggleProjectDetailst } = modalSlice.actions;

export default modalSlice.reducer;
