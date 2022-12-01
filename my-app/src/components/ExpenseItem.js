import React from 'react';
import './ExpenseItem.css'

function ExpenseItem() {
	return (
  <div className='expense-item'>
	<div>December 1st 2022</div>
		<div className='expense-item__description'>
			<h2>Car Insurance</h2>
			<div className='expense-item__price'>$299.99</div>
		</div>
	</div>
	
  );
}

export default ExpenseItem;
