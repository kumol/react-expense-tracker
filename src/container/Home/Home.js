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
            <button onClick={()=>controlModal()} class="cssbuttons-io-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                <span>Add</span>
            </button>
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