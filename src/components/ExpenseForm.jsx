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
		<>
			<form onSubmit={HandleSubmit} className="flex flex-col w-64 bg-stone-800 p-1 text-zinc-800">
				<input 
					type="text" name="description"
					className="input input-bordered w-full max-w-xs"
					value={desc}
					placeholder="Describe Expense"
					onChange={(e)=>setDesc(e.target.value)}
				/>
				<select 
					name="category" value={category}
					placeholder="Select Category"
					onChange={(e) => setCategory(e.target.value)}
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
				/>
				<input 
					type="date" name="date" value={date}
					placeholder="Date"
					onChange={(e) => setDate(e.target.value)}
				/>
				<button type="submit">Record</button>
			</form>
		</>
	)
}

export default ExpenseForm
