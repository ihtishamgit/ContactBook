import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <ul className="nav bg-dark py-2 my-2">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to='/'>Contact Book</Link>
  </li>
  <li className="nav-item ml-auto">
    <Link className="nav-link" to='/add'>Create Contact</Link>
  </li>
  
</ul>
        </>
    )
}
export default Navbar;