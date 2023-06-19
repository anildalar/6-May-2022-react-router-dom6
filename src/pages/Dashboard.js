import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    //1. State/Hook Area
    let navigate = useNavigate();

    //2. Function defiation
    let b = ()=>{
        //alert('OKOKOKOKO');
        navigate('/profile');
    }

  return (
      <React.Fragment>
          <div>Dashboard Page</div>
          <button onClick={b}>Go to Profile Page</button>
          <Link to="/profile">Go to Profile Page Technique 2</Link>
          <NavLink className={ (navData) => (navData.isActive ? "active" : 'none') } to="/profile">Go to Dashboard Page Technique 3</NavLink>
      </React.Fragment>
  )
}
