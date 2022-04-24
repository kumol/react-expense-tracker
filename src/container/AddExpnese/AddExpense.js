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
        <div>
            <div>Header of History</div>
            <div>
                <label>Amount</label>
                <input type="number" name='spentMoney' onChange={($event)=>valueSeter($event)} value={spentMoney}></input>
                <label>Details</label>
                <input type="text" name="details" onChange={($event)=>valueSeter($event)} value={details}></input>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}
export default AddExpense;