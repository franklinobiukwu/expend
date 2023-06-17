import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	expenses: [],
};

const expenseFormSlice = createSlice({
	name: 'expenseforms',
	initialState,
	reducers: {
		registerExpense: (state, action) =>{
			state.expenses.push(action.payload)
		},
		updateExpense: (state, action) => {
			const {id, amount, category, desc, date} = action.payload

			const itemToEdit = state.expenses.find(item => item.id === id)
			if(itemToEdit){
				itemToEdit.desc = desc
				itemToEdit.category = category
				itemToEdit.amount = amount
				itemToEdit.date = date
			}
		},
		deleteExpense: (state, action) => {
			state.expenses = state.expenses.filter((e)=>e.id != action.payload)
		}
	},
});

export const { registerExpense, updateExpense, deleteExpense } = expenseFormSlice.actions
export default expenseFormSlice.reducer
