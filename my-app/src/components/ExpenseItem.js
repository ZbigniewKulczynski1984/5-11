import React from 'react';
import './ExpenseItem.css'

function ExpenseItem() {
	const expenseDate = new Date(2022, 11, 1);
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 299.99;

	return (
  <div className='expense-item'>
	<div>{expenseDate}</div>
		<div className='expense-item__description'>
			<h2>{expenseTitle}</h2>
			<div className='expense-item__price'>${expenseAmount}</div>
		</div>
	</div>
	
  );
}

export default ExpenseItem;
