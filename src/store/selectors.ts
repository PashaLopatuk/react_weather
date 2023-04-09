import { RootState } from './store';
import currentWeatherSliceReducer from './slices/CurrentWeatherSlice';


export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;
