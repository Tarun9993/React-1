import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <h3>Shopping Mall</h3>
        </div>
        <div className='search'>
            <input type= "text " placeholder='search...'></input>
        </div>
        <div className='login'>
            <button>Signin</button>
            <button>SignUp</button>
            <button>Cart</button>
        </div>
    </div>
  )
}

export default Header