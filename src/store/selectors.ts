import { RootState } from './store';
import currentWeatherSliceReducer from './slices/сurrentWeatherSlice';


export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;
