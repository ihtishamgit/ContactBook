import React from 'react'
import {useSelector} from 'react-redux'
import Contacts from './Contacts'
const Contact = () => {
  const state = useSelector(state => state.contacts)
  console.log(state);
    return (
        <>  
          <div className="container">
              <div className="row">
              <table className="table">
  <thead>
    <tr>
      <th scope="col">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"></label>
      </th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {   state.map(state=> (
       <Contacts state={state} key={state.id}/>
      ))
    }
  </tbody>
</table>    

              </div>
               </div>
          
        </>
    )
}

export default Contact;