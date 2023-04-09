import { RootState } from './store';
import currentWeatherSliceReducer from './slices/currentWeatherSlice';


export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;
