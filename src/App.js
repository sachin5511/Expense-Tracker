import React, { useState ,useEffect} from 'react';
import ListExpenses from './component/ExpensesListData/ListExpenses';
import './App.css';
import ExpenseForm from './component/ExpenseForm/ExpenseForm';

const App = () => {
  const [expense, setExpense] = useState([]);
  const [editData, setEditData] = useState(null)

  function fetchExpenses() {
    fetch('http://localhost:8080/expenseFetch', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setExpense(data);
      })
      .catch(error => console.error('Fetch error:', error));
  }

  useEffect(() => {
    fetchExpenses();
  }, []);


  useEffect(()=>{
    // updateDatabase()
  },[expense])


  const editExpense =(val)=>{
    setEditData(val)
    console.log(val)
  }

  const addExpense =(val) =>{
    fetch('http://localhost:8080/expenseSave', {
      method : "POST",
      body : JSON.stringify(val),
      headers : {
          "Content-Type" : "Application/json",
      },   
  }).then(data => {
    alert("data inserted....")
    fetchExpenses();
  })
  .catch(error => console.error('Fetch error:', error));
  
  }

  const updateExpense=(val)=>{
    let data = expense.map((ele, idx)=>{
      if(idx === val.id){
        const {price, description, date} = val
        return {price, description, date}
      }
      return ele
    })
    fetch(`http://localhost:8080/updateExpense`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(val),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(updatedData => {
        alert("data updated....."+{updatedData})
        fetchExpenses();
      })
      .catch(error => console.error('Update error:', error));
  }

  const deleteExpense=(id)=>{
    console.log(id)
    let data = expense.filter((ele, idx)=>idx !== id)
    fetch(`http://localhost:8080/deleteExpense?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
       alert("Data delete Successfully.....");
       fetchExpenses();
      })
      .catch(error => console.error('Delete error:', error));
  }
  return (
    <div className='main'>
      <h1>Expense Tracker</h1>
      <div className='app'>
        <div className='section new-expense'>
          {/* <NewExpense expensesGetApp={expensesdataGet} /> */}
          <ExpenseForm addExpense={addExpense} editData={editData} updateExpense={updateExpense} setEditData={setEditData} />
        </div>
        <div className='section list-expenses'>
          <ListExpenses expense={expense} deleteExpense={deleteExpense} editExpense={editExpense} />
        </div>
      </div>
    </div>
  );
};

export default App;
