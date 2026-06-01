import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  mobileMenuOpen: boolean;
  activeFaq: number | null;
  activeTestimonial: number;
}

const initialState: UIState = {
  mobileMenuOpen: false,
  activeFaq: 0,
  activeTestimonial: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.mobileMenuOpen = false;
    },
    setActiveFaq(state, action: PayloadAction<number | null>) {
      state.activeFaq = state.activeFaq === action.payload ? null : action.payload;
    },
    setActiveTestimonial(state, action: PayloadAction<number>) {
      state.activeTestimonial = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActiveFaq, setActiveTestimonial } =
  uiSlice.actions;
export default uiSlice.reducer;
