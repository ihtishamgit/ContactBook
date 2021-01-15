import React from 'react'
import {useState} from 'react'
import { useDispatch } from "react-redux";
import {addContact} from "../../Store";
import shortid from "shortid";
import {useHistory} from 'react-router-dom'

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
     const [name, setName] = useState("")
     const [phone, setPhone] = useState("")
     const [email, setEmail] = useState("")
    
    const onSubmit = (e)=>{
          e.preventDefault();
        const contact={
            id:shortid.generate(),
             name:name,
             phone:phone,
             email:email
         }
        dispatch(addContact(contact));
        history.push('/');
    }
    return (
        <>
        <div className='container my-4'>
            <div className='row'> 

            <div className='col-md-10'>
            <div>
             <form onSubmit={onSubmit}>    
          <input onChange={(e)=>(setName(e.target.value))} value={name}   className="form-control my-4" type="text" placeholder="Enter Name Here" aria-label="readonly input example" readonly/>
          <input onChange={(e)=>(setPhone(e.target.value))} value={phone} className="form-control my-4" type="text" placeholder="Enter Phone Here" aria-label="readonly input example" readonly/>
          <input onChange={(e)=>(setEmail(e.target.value))} value={email} className="form-control my-4" type="text" placeholder="Enter Email Here" aria-label="readonly input example" readonly/>
          <button className='btn btn-primary' type='submit'>Create Contact</button>
          </form>
        </div>
                 </div>
            </div>
       
            </div>
        
        </>
    )
}
export default AddContact;