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
		<div className="w-2/5 m-auto">
			<form onSubmit={HandleUpdate}
				className="flex flex-col drop-shadow-xl">
				<input
					type="date"
					name="date" defaultValue={date}
					onChange={(e) => setDate(e.target.value)}
					className="px-2 py-1"
				/>
				<input
					type="number"
					name="amount" defaultValue={amount}
					onChange={(e) => setAmount(e.target.value)}
					className="px-2 py-1"
				/>
				<select
					name="category" defaultValue={category}
					onChange={(e) => setCategory(e.target.value)}
					className="px-2  py-1"
				>
					<option value="personal">Personal</option>
					<option value="family">Family</option>
					<option value="food">Food</option>
					<option value="others">Others</option>

				</select>
				<input
					name="description" defaultValue={desc}
					onChange={(e) => setDesc(e.target.value)}
					className="py-1 px-2"
				/>
				<div className="flex justify-end mt-2">
					<button type="button"
						onClick={props.closeMod}
						className="bg-red-400 px-2 rounded"
					>Cancel</button>
					<button type="submit"
						className="bg-green-400 px-2 ml-2 rounded"
					>Update</button>
				</div>

			</form>
		</div>
	)
}

export default EditExpenseModal
