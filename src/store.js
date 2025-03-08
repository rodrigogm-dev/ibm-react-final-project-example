import { configureStore } from '@reduxjs/toolkit'
import venueReducer from './Components/VenueSlice'
import avReducer from './Components/avSlice'
import mealsReducer from './Components/mealsSlice'

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  }
})
