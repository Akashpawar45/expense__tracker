
 import './header.css';
 import { useState} from 'react';
 import  {addExpenseApi,deleteExpenseApi} from '../service/api';


 
      
 const Header = () => {

    const expenseSize="32";

    const initialExpenseData={
      
   
      expenseName:"",
      amount:0,
      category:"",
      date:"",
    }

   const[expenseData,setExpenseData]=useState({
    
    expenseName:"",
    amount:0,
    category:"",
    date:"",

   });

   const [addExpense,setAddExpense]=useState([]);
   const [errormessage,setErrorMessage]=useState('');
   const [successMessage,setSuccessMessage]=useState('');
  


   const changeExpenseData=(e)=>
   {
    setExpenseData({ ...expenseData,[e.target.name]:e.target.value})  //firstly expand data  or collect using spread operator and then set data using object in that use dynamic variable as a key and then use value
     setSuccessMessage("");
   }


   const handleAddExpenses= async ()=>
   {
      
      
    //Validate data 

    if( expenseData.expenseName!==null && expenseData.amount>0 && expenseData.category!==null
      && expenseData.date!==null )
      {
      setAddExpense([...addExpense,{

        // expenseId:expenseData.expenseId,
        expenseName:expenseData.expenseName,
        amount:expenseData.amount,
        category:expenseData.category,
        date:expenseData.date
      }]);
      setErrorMessage("");
      setSuccessMessage("Successfully Added");
    }
    else {
      return setErrorMessage("*All fields are mandatory*") //set error message
      
    }

      


      //call server api for sending data

      await addExpenseApi({...expenseData,amount:Number(expenseData['amount'])}) //converted amount into no format
       
    }
    const clearExpenses=()=>
    {
      setExpenseData(initialExpenseData)
      setSuccessMessage("")
    }
 

    const handleDeleteExpense= async (index)=>
    {
       await deleteExpenseApi(index);

       const updatedExpenses = addExpense.filter((expense,i) => i !== index);   //filter method removed objects on the basis of conditions
      
       setAddExpense(updatedExpenses);
    }
   return (
    <>
    <div className="div-header">  <h1>Expense Tracker</h1></div><br /><br /><br/>
     
    <div id="mr">
       <table border="1"> 
          <div className='daily-expenses'>Daily Expenses</div><br />
          {/* <div className='expense-total'>Expense Total</div><br /><br />  */}
           {errormessage && <p style={{ color: 'red' }}>{errormessage}</p>} 
           {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} 
          
            <label>Expense Name</label> 
            <label className="a1">Amount</label>
            <label  className="c1">Category</label>

              <input type="text" name="expenseName"  value= {expenseData.expenseName} onChange={changeExpenseData} size={expenseSize} required/>
              <input type="number" className="as" name="amount" value=  {expenseData.amount} onChange={changeExpenseData}  required/>

                <select  name="category" value= {expenseData.category} onChange={changeExpenseData} id="Category" required>
                     <option value="null"></option>
                     <option value= "food" >Food</option>
                     <option value= "travel">Travel</option>
                     <option value=  "shopping">Shopping</option>
                </select><br /><br />

            <label className="d1">Date</label><br/>

               <input className="asd" name="date" value= {expenseData.date} onChange={changeExpenseData} type="date" required />
                   <br/><br/><br/> 

                 <ul>
                    <li><button type='submit' className="button1" onClick={handleAddExpenses} >Add Expense </button> 
                    </li>
                    <li><button className="button2" onClick={clearExpenses} >Clear Expense</button> </li>
       
                 </ul>

        </table>
    </div><br /><br /> 


    <div id="mr">
        <table className='table'  align='centre'> 
         
         <thead> 
          <tr>
             <th>Expense Name</th>
             <th>Amount</th>
             <th>Category</th>
             <th id='date'>Date</th>
             <th id="delete">Delete</th>
          </tr>
          </thead>
            
            <tbody> 
                {  
                addExpense.map((fetch,index)=>
                
                <tr key={index}>
                  <td>{fetch.expenseName}</td>
                  <td>{fetch.amount}</td>
                  <td>{fetch.category}</td>
                  <td>{fetch.date}</td>
                  <td>
                    <button className="deleteButton" onClick={()=>handleDeleteExpense(index)}>Delete</button>
                  </td>
                </tr> )
                }

                
            </tbody>   

        </table>
    </div>
 
     </>
   )
 }
 
export default Header;