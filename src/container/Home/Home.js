import React,{useEffect,useState} from 'react';
import axios from 'axios';

const baseUrl = "https://theexpense.herokuapp.com/";
const Home = (props) => {
    const [expenses, setExpenses] = useState({});
    const getLastExpenses = async()=>{
        let response = await axios.get(`${baseUrl}money`);
        setExpenses(response.data.body);
        console.log(response.data.body);
    }
    useEffect(() => {
        // Update the document title using the browser API
        getLastExpenses();
      }, []);
    
    
    return (
        <div  className='content-body'>
            <div>Header</div>
            <div>
                <ul style={{listStyle: "none"}}>
                    {
                        expenses && expenses.length>0 ? expenses.map(ex=>{
                            return (<li className='main_list'><div className='list'>
                                    <div style={{width: "10%", border: "1px solid"}}>{ex.spentMoney}</div> <span>{ex.details}</span>
                                </div></li>)
                        }) : <p>No content found</p>
                    }
                </ul>
            </div>
        </div>
    );
}
export default Home;