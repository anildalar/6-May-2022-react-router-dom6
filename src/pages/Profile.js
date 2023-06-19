import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Profile() {
    //1. State/Hook Area

    //higher order function
    let navigate =  useNavigate();//Every hook is a function
    //Every hook start with useSomething()

    //2. Function defination Area
    let a =  ()=>{ 
        //alert('OKOKO');
        navigate('/dashboard');
    } 

    //3. Return Statemetn
  return (
      <>
        <div>Profile Page</div>
        <button onClick={a}>Go to Dashboard Page Technique 1</button>
        <Link to="/dashboard">Go to Dashboard Page Technique 2</Link>
        <NavLink activeClassName="active" to="/dashboard">Go to Dashboard Page Technique 3</NavLink>
      </>
  )
}
