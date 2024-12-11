import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
    paste:localStorage.getItem("paste")
    ? JSON.parse(localStorage.getItem("paste"))
    : [],
  },
  reducers: {
    addToPaste: (state,action) => {
      const paste = action.payload
      state.paste.push(paste)
      localStorage.setItem("paste",JSON.stringify(state.paste))
      toast.success("Paste Created Successfully")
    },
    updateToPaste: (state) => {
      const paste = action.payload
      const index = state.paste.findIndex((item) => item._id === paste._id);
      if(index >= 0){
        state.paste[index] = paste;
        localStorage.setItem("paste",json.stringify(state.paste));
        toast.success("Updated Successfully!")
      }
      else{
        toast.error("No Paste Found!")
      }
    },
    resetAllPaste: (state, action) => {
      state.paste = [];
      localStorage.removeItem("paste");
      toast.warn("Reset Successfully!")
    },
    removePaste : (state,action) => {
      const pasteId = action.payload;
      state.paste = state.paste.filter((item) => item._id !== pasteId);
      localStorage.setItem('paste', JSON.stringify(state.paste));
      toast.info('Paste Removed');
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removePaste } = pasteSlice.actions

export default pasteSlice.reducer