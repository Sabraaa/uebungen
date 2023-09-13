import { configureStore } from "@reduxjs/toolkit";
import counterRed from "./counter"

export default configureStore({
  reducer: {
    counterRed
  }
});
