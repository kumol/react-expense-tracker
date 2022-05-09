import axios from 'axios';
import moment from 'moment';
import React,{useEffect,useState} from 'react';
const baseUrl = "https://theexpense.herokuapp.com/";
const History = (props) => {

    const [history, setHistory] = useState([]);
    const [avg, setAvg] = useState(0);
    const [total, setTotal] = useState(0);

    const getExpenseHistory = async()=>{
        let month = moment().format("MM");
        if(month<10){
            month = month[1];
        }
        let response = await axios.get(`${baseUrl}money/monthly-spent?month=${month}`);
        
         let [bodyData] = response.data.body;
        setHistory(bodyData.dates);
        setAvg(bodyData.avgCost);
        setTotal(bodyData.total);
    }
    useEffect(()=>{
        getExpenseHistory();
    }, [])
    return (
        <div className='content-body'>
            <div>Header of History</div>
            <div>
                <ul style={{listStyle: "none"}}>
                    <li>
                        <div className='list'>
                            <div className='amount'>Average: {avg.toFixed(2)}</div>
                            <div className='details'> per day of {history.length} <span style={{float: "right"}}> Total : {total}</span></div>
                        </div>
                    </li>
                    {
                        history.length>0 ? history.map(h=>{
                            return (<li className='main_list'><div className='list'>
                            <div className='amount'>{h.money}</div>
                            <div className='details'> <span style={{float: "right"}}>{moment(h.date).format("LL")}</span></div>
                        </div></li>)
                        }) : <p>hello</p>
                    }
                    
                </ul>
            </div>
        </div>
    );
}
export default History;