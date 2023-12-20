import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const expenseSize = "32";

  const initialExpenseData = {
    expenseName: "",
    amount: "",
    category: "",
    date: "",
  };

  const [expenseData, setExpenseData] = useState(initialExpenseData);
  const [expenses, setExpenses] = useState([]);

  const changeExpenseData = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const handleAddExpenses = (e) => {
    // e.preventDefault();
    setExpenses([
      ...expenses,
      {
        expenseName: expenseData.expenseName,
        amount: expenseData.amount,
        category: expenseData.category,
        date: expenseData.date,
      },
    ]);
    // setExpenseData(initialExpenseData);
  };

  const handleClearForm = () => {
    setExpenseData(initialExpenseData);
  };

  return (
    <>
      <div className="div-header">
        <h1>Expense Tracker</h1>
      </div>
      <br />
      <br />
      <br />
      <div id="mr">
        <table border="1">
          <div className="daily-expenses">Daily Expenses</div>
          <br />
          <div className="expense-total">Expense Total</div>
          <br />
          <br />

          <label>Expense Name</label>
          <label className="a1">Amount</label>
          <label className="c1">Category</label>

          <input
            type="text"
            name="expenseName"
            value={expenseData.expenseName}
            onChange={changeExpenseData}
            size={expenseSize}
            required
          />
          <input
            type="number"
            className="as"
            name="amount"
            value={expenseData.amount}
            onChange={changeExpenseData}
            required
          />

          <select
            name="category"
            value={expenseData.category}
            onChange={changeExpenseData}
            id="Category"
            required
          >
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
          </select>
          <br />
          <br />

          <label className="d1">Date</label>
          <br />

          <input
            className="asd"
            name="date"
            value={expenseData.date}
            onChange={changeExpenseData}
            type="date"
            required
          />
          <br />
          <br />
          <br />

          <ul>
            <li>
              <button type="submit" className="button1" onClick={handleAddExpenses}>
                Add Expense
              </button>
            </li>
            <li>
              <button className="button2" onClick={handleClearForm}>
                Clear Expense
              </button>
            </li>
          </ul>
        </table>
      </div>
      <br />
      <br />

      <div id="mr">
        <table className="table" align="centre">
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.expenseName}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Header;
