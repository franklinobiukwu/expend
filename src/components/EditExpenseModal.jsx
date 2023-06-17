import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateExpense } from "../redux/expensesSlice"

const EditExpenseModal = (props) => {
	const [date, setDate] = useState(props.data.date)
	const [amount, setAmount] = useState(props.data.amount) 
	const [category, setCategory] = useState(props.data.category) 
	const [desc, setDesc] = useState(props.data.desc) 

	const dispatch = useDispatch()
	const id = props.data.id


	const HandleUpdate = (e) => {
		e.preventDefault()
		dispatch(updateExpense({id, amount, category, desc, date}))
		setDate("")
		setAmount("")
		setCategory("Personal")
		setDesc("")
		props.closeMod()
	}
	return(
		<div>
			<form onSubmit={HandleUpdate}>
				<input
					type="date"
					name="date" defaultValue={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<input
					type="number"
					name="amount" defaultValue={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<select
					name="category" defaultValue={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="personal">Personal</option>
					<option value="family">Family</option>
					<option value="food">Food</option>
					<option value="others">Others</option>

				</select>
				<input
					name="description" defaultValue={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
				<button type="button" onClick={props.closeMod}>Cancel</button>
				<button type="submit">Update</button>

			</form>
		</div>
	)
}

export default EditExpenseModal
