import { useDispatch } from "react-redux"
import { deleteExpense } from "../redux/expensesSlice"
import { useState } from "react"
import EditExpenseModal from "./EditExpenseModal"
import { document } from "postcss"

const ExpenseRecord = (props) => {
	const [edit, setEdit] = useState(false)

	const dispatch = useDispatch()

	const HandleEdit = () =>{
		setEdit(true)
	}
	const closeModal = () => {
		setEdit(false)
	}
	const modalClasses = edit ? "absolute top-0 w-full h-full bg-modalblack" : "hidden";

	return(
		<div className="flex bg-slate-200 justify-between items-center mb-1 px-4">
			<div>{props.data.date}</div>
			<div>GH₵ {props.data.amount}</div>
			<div>
				<div>{props.data.desc}</div>
				<div 
					className="bg-green-400 px-2
					rounded-2xl text-xs inline-block"
				>{props.data.category}</div>
			</div>
			<div>
				<button
					type="button" onClick={HandleEdit}
					className="px-2 bg-yellow-300 px-2 rounded"
				>
					Edit
				</button>
				<button
					className="bg-red-400 px-2 rounded ml-2"
					type="button"
					onClick={() => dispatch(deleteExpense(props.data.id))}>Delete</button>
			</div>
			<div className={modalClasses}>
				{
					edit && (<EditExpenseModal data={props.data} closeMod={closeModal}/>)
				}
			</div>
		</div>
	)
}


export default ExpenseRecord
