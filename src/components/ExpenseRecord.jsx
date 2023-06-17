import { useDispatch } from "react-redux"
import { deleteExpense } from "../redux/expensesSlice"
import { useState } from "react"
import EditExpenseModal from "./EditExpenseModal"

const ExpenseRecord = (props) => {
	const [edit, setEdit] = useState(false)

	const dispatch = useDispatch()

	const HandleEdit = () =>{

		setEdit(true)
	}
	const closeModal = () => {
		setEdit(false)
	}

	return(
		<div className="flex bg-violet-400 justify-between items-center">
			<div>{props.data.date}</div>
			<div>GH₵ {props.data.amount}</div>
			<div className="flex">
				<div>{props.data.desc}</div>
				<div className="bg-green-400 px-2 rounded-2xl">{props.data.category}</div>
			</div>
			<div>
				<button
					type="button" onClick={HandleEdit}
					className="px-2 bg-zinc-600"
				>
					Edit
				</button>
				<button
					className="bg-red-400"
					type="button"
					onClick={() => dispatch(deleteExpense(props.data.id))}>Delete</button>
			</div>
			<div>
				{
					edit && (<EditExpenseModal data={props.data} closeMod={closeModal}/>)
				}
			</div>
		</div>
	)
}


export default ExpenseRecord
