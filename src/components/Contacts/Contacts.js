import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom';
import {deleteContact} from "../../Store";
import { useDispatch } from "react-redux";
const Contacts = ({state}) => {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
      <td scope="row">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label htmlFor="vehicle1"></label>
        </td>
      <td><Avatar className="mr-2" name={state.name} size="45" round={true}/>{state.name}</td>
      <td>{state.phone}</td>
      <td>{state.email}</td>
      <th scope="col">
          <Link to='#'><span className="material-icons">edit</span></Link>
          <span className="material-icons" onClick={()=>(dispatch(deleteContact(state.id)))}>remove_circle</span>
      </th>
    </tr> 
        </>
    )
}


export default Contacts;