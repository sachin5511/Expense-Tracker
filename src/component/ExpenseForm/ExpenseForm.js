import React,{useEffect, useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // const [tittleForm, setTitleForm]  = useState("");
    // const [amountForm, setamountForm]  = useState("");
    // const [dateForm, setdateForm]  = useState('');

    const [form, setForm] = useState({
        date:"",
        description:"",
        price:""
    })

    useEffect(()=>{
        if(props?.editData){
            setForm({
                id:props?.editData.id,
                date:props?.editData.date,
                description:props?.editData.description,
                price:props?.editData.price 
            })
        }
    },[props?.editData])

    // const tittleChange = (event) =>{
    //     console.log(event.target.name)
    //     setTitleForm(event.target.value)
    // }
    // const amountChange = (event) =>{
    //     setamountForm(event.target.value)
    // }
    // const dateChange = (event) =>{
    //     setdateForm(event.target.value)
    // }
    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     const expenseData = {
    //         date: new Date(dateForm),
    //         description: tittleForm,
    //         price: amountForm
            
    //     }
    //     console.log(expenseData)
    //     props.expensesGet(expenseData);
    //     setTitleForm('');
    //     setamountForm('');
    //     setdateForm('');
    // }

    const handleInput=(e)=>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
       if(props?.editData){
        props.updateExpense(form)
        props?.setEditData(null)
       }else{
        props.addExpense(form)
       }  
        setForm({ date:"",
            description:"",
            price:""})
    }

    const checkdisable=()=>{
        if(form.date ==="" || form?.description ==="" || form?.price ===""){
            return true
        }
        return false
    }
  return (
    <form onSubmit={(e)=>submitHandler(e)}>
        <div className='form'>
            <div className='expenseform-tittle'>
                <h2>Add Expense</h2>
            </div>
            <div className='expenseform-div'>
                <label>Date</label>
                <input type='date' name="date" value={form?.date} onChange={handleInput}></input>
            </div>
            <div className='expenseform-div'>
                <label>Tittle</label>
                <input type='text' name="description" value={form.description} onChange={handleInput}></input>
            </div>
            <div className='expenseform-div'>
                <label>amount</label>
                <input type = "number" name="price" value={form.price} onChange={handleInput}></input>
            </div>
            <div className='expenseform-submit'>
               <button type='submit' disabled={checkdisable()}>{props.editData ? "Update" : "Add"} Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm
