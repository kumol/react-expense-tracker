import axios from 'axios';
import moment from 'moment';
import React,{useEffect,useState} from 'react';
import classes from "./GroupExpense.module.css";

const baseUrl = "https://theexpense.herokuapp.com/";
const group = "62965524d6a881a4909ec7f8",
    createdBy ="629654682f468d3cff4d5dbc";
const GroupExpense = (props) => {
    const [expenses, setExpenses] = useState({});
    const [total, setTotal] = useState(0);
    const [spentMoney, setSpentMoney] = useState(0);
    const [details, setDetails] = useState("");
    const [type, setType] = useState("Meal");
    const valueSeter = (event)=>{
        if(event.target.name == "details"){
            setDetails(event.target.value);
        } else if(event.target.name == "spentMoney"){
            setSpentMoney(event.target.value);
        } else{
            setType(event.target.value);
        }
    }

    const saveExpense = async()=>{
        let response = await axios.post(`${baseUrl}group-expense`, {spentMoney: spentMoney, details: details, type: "meal", group: group, createdBy: createdBy});
        return response.data.success;
    }
    const onSubmit = async()=>{
        let isSuccess = await saveExpense();
        if(isSuccess){
            props.controlModal()
        }
    }
    const getLastExpenses = async()=>{
        let response = await axios.get(`${baseUrl}group-expense`);
        setExpenses(response.data.body);
        setTotal(response.data.total);
    }
    useEffect(() => {
        // Update the document title using the browser API
        getLastExpenses();
    }, []);
    return(
        <div className='content-body'>
            <div>
                <div className={classes.amount}>
                    <label className={classes.details}>Amount: </label>
                    <input className={classes.input} type="number" name='spentMoney' onChange={($event)=>valueSeter($event)} value={spentMoney}></input>
                </div>
                <div className={classes.amount}>
                    <label className={classes.details}>Details: </label>
                    <input className={classes.input} type="text" name="details" onChange={($event)=>valueSeter($event)} value={details}></input>
                </div>
                <div className={classes.amount}>
                    <label for="type" className={classes.details}>Type: </label>
                    <select name = "type" className={classes.input} onChange={($event)=>valueSeter($event)}>
                        <option style={{ width: "40%"}} className={classes.input} name = "type" value="Meal">Meal</option>
                        <option style={{ width: "40%" }} className={classes.input} name = "type" value="Utility">Utility</option>
                    </select>
                </div>
            </div>
            <button className='onsubmit' onClick={onSubmit}>Submit</button> 
            <ul style={{listStyle: "none", padding:"0"}}>
                {
                    expenses && expenses.length>0 ? expenses.map(ex=>{
                        return (<li key={ex._id} className='main_list'><div className='list'>
                                <div className='amount'>{ex.spentMoney}</div>
                                <div className='details'>{ex.details} <span style={{float: "right"}}>{moment(ex.date).format("LL")}</span></div>
                            </div></li>)
                    }) : <p>No content found</p>
                }
            </ul>
            <div className='amount'>{total}</div>
            <div className='details'> total amount </div>
            
        </div>
    )
}

export default GroupExpense;