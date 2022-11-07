import { IJobList } from './../../types/job.types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



interface IJobListState {
  list: IJobList[],
  loading: boolean,
}

export const fetchJoblist = createAsyncThunk<IJobList[], undefined, {rejectValue: string}>(
  'jobList/fetchJoblist',
  async function (_, { rejectWithValue }){
    const response = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu');

    if(!response.ok){
      return rejectWithValue('Server error!');
    }
    const data = await response.json();

    return data;
  }
);

const initialState: IJobListState = {
  list: [],
  loading: true,
};

const jobSlice = createSlice({
  name: 'jobList',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoblist.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJoblist.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;        
      })
  }
});
export default jobSlice.reducer;