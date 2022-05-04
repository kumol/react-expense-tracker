import axios from 'axios';
import React,{useEffect,useState} from 'react';
import classes from "./AddExpense.module.css";

const baseUrl = "https://theexpense.herokuapp.com/";
const AddExpense = (props) => {

    const [spentMoney, setSpentMoney] = useState(0);
    const [details, setDetails] = useState("");
    const valueSeter = (event)=>{
        if(event.target.name == "details"){
            setDetails(event.target.value);
        } else{
            setSpentMoney(event.target.value);
        }
    }

    const saveExpense = async()=>{
        let response = await axios.post(`${baseUrl}money`, {spentMoney: spentMoney, details: details});
        return response.data.success;
    }
    const onSubmit = async()=>{
        let isSuccess = await saveExpense();
        if(isSuccess){
            props.controlModal()
        }
    }

    return (
        <div >
            <div className="header">Header of History</div>
            <div className='ModelBody'>
                <div className={classes.amount}>
                    <label>Amount</label>
                    <input className={classes.input} type="number" name='spentMoney' onChange={($event)=>valueSeter($event)} value={spentMoney}></input>
                </div>
                <div>
                    <label className={classes.details}>Details</label>
                    <input className={classes.input} type="text" name="details" onChange={($event)=>valueSeter($event)} value={details}></input>
                </div>
            </div>
            <div className='modal-footer'><button className='onsubmit' onClick={onSubmit}>Submit</button> <button className="onCancel" onClick={props.controlModal}>Cancel</button></div>
        </div>
    );
}
export default AddExpense;