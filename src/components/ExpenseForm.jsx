import { useState } from "react"
import { registerExpense } from "../redux/expensesSlice"
import { v4 as uuid } from "uuid"
import { useDispatch} from "react-redux"

const ExpenseForm = () => {
	const [desc, setDesc] =useState('')
	const [category, setCategory] =useState('Personal')
	const [amount, setAmount] =useState('')
	const [date, setDate] = useState('')

	console.log(desc)
	console.log(category)
	console.log(amount)

	const dispatch = useDispatch()
	
	

	const HandleSubmit = (e) => {
		e.preventDefault()
		dispatch(registerExpense({id: uuid(), desc, category, amount, date}))
		setDesc('')
		setCategory('Personal')
		setAmount('')
		setDate('')
	}


	return(
		<div className="bg-slate-100">
			<h2 className="text-center text-xl">Record Expense</h2>
			<form onSubmit={HandleSubmit}
				className="flex flex-col w-2/5 p-1 text-zinc-800 mx-auto
				drop-shadow-xl">
				<input 
					type="text" name="description"
					className="input input-bordered w-full px-2 py-1"
		
					value={desc}
					placeholder="Describe Expense"
					onChange={(e)=>setDesc(e.target.value)}
				/>
				<select 
					name="category" value={category}
					placeholder="Select Category"
					onChange={(e) => setCategory(e.target.value)}
					className="px-2 py-1"
				>
					<option value="personal">Personal</option>
					<option value="family">Family</option>
					<option value="food">Food</option>
					<option value="others">Others</option>
				</select>
				<input 
					type="number" name="amount" value={amount}
					placeholder="Amount"
					onChange={(e) => setAmount(e.target.value)}
					className="px-2 py-1"
				/>
				<input 
					type="date" name="date" value={date}
					placeholder="Date"
					onChange={(e) => setDate(e.target.value)}
					className="px-2 py-1"
				/>
				<button type="submit"
					className="mt-2 text-white bg-blue-500
					hover:bg-blue-600 rounded-md font-semibold drop-shadow-xl"
				>Record</button>
			</form>
		</div>
	)
}

export default ExpenseForm
