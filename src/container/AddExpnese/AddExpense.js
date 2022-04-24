import axios from 'axios';
import React,{useEffect,useState} from 'react';

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
                <label>Amount</label>
                <input type="number" name='spentMoney' onChange={($event)=>valueSeter($event)} value={spentMoney}></input>
                <label>Details</label>
                <input type="text" name="details" onChange={($event)=>valueSeter($event)} value={details}></input>
            </div>
            <div className='modal-footer'><button onClick={onSubmit}>Submit</button> <button className='float-right' onClick={props.controlModal}>Cancel</button></div>
        </div>
    );
}
export default AddExpense;