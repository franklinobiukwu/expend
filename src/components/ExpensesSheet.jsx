import { useSelector } from "react-redux"
import ExpenseRecord from "./ExpenseRecord"
import EditExpenseModal from "./EditExpenseModal"
import { useState } from "react"

const ExpensesSheet = () => {

	const expensesData = useSelector((store) => store.expensesStore.expenses)

		return(
			<div>
				
				{
					expensesData.map((item, idx) => {
						return(
							<div key={item.id + idx}>
								
								<ExpenseRecord data={item} />

							</div>
						)
					})
				}
				
			</div>
	)
}

export default ExpensesSheet
