import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Model from '../../Layout/Model/Model';
import AddExpense from '../AddExpnese/AddExpense';

const baseUrl = "https://theexpense.herokuapp.com/";
const Home = (props) => {
    const [expenses, setExpenses] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const controlModal = ()=>{
        if(openModal){
            getLastExpenses();
        }
        setOpenModal(!openModal);
    }
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
        <div className='content-body'>
            <div><button onClick={()=>controlModal()}>Add New</button></div>
            <div>
                {openModal ? (
                    <Model>
                        <AddExpense controlModal={controlModal}/>
                    </Model>
                ) : null}
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