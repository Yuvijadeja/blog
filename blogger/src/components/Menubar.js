import React from 'react'

function Menubar() {
  function closeNavbar() {
    document.getElementById('navbar').style.right = "-300px"
  }
  return (
    <nav id='navbar'>
      <div className='text-end'>
        <i className='fa fa-times' onClick={closeNavbar}></i>
      </div><br></br>

      <ul>
        <li className='active' onClick={closeNavbar}>Home</li>
        <li onClick={closeNavbar}>Articles</li>
        <li onClick={closeNavbar}>Our Story</li>
        <li onClick={closeNavbar}>Write Us</li>
      </ul>
    </nav>
  )
}

export default Menubar