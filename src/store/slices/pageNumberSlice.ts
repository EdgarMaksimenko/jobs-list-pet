import { IJobList } from './../../types/job.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface IPageNumber {
  page: number;
}


const initialState: IPageNumber = {
  page: 1,
};

const pageNumberSlice = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<string>){
      if(action.payload === '+'){
        state.page = state.page + 1;
      }
      if(action.payload === '-'){
        state.page = state.page - 1;
      }
    },
    setPage(state, action: PayloadAction<number>){
      state.page = action.payload;
    }
  },
});
export const {changePage, setPage} = pageNumberSlice.actions;
export default pageNumberSlice.reducer;