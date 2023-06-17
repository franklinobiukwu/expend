import { configureStore } from '@reduxjs/toolkit'
import expenseFormSlice from './expensesSlice'

const store = configureStore({
  
  reducer: {
	expensesStore: expenseFormSlice
  },

})
 
export default store
