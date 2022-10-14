import React from 'react'

function Header() {
  function openNavbar() {
    document.getElementById('navbar').style.right = "0";
  }

  return (
    <header className='container-fluid'>
      <section className='container'>
        <article className='row'>
          <div className='col-md-5'>
            <h4>BLOGGERS</h4>
          </div>

          <div className='col-md-4'>
            <div className='row'>
              <div className='col-10 header-social-icons'>
                <a href='https://twitter.com' target='_blank'><i className="fab fa-twitter"></i></a>
                <a href='https://facebook.com' target='_blank'><i className='fab fa-facebook-f'></i></a>
                <a href='https://instagram.com' target='_blank'><i className='fab fa-instagram'></i></a>
              </div>

              <div className='col-2 text-end'>
                <i className='fas fa-bars menu-icon' onClick={openNavbar}></i>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="input-group">
              <span className="input-group-text">
                <i className='fas fa-search'></i>
              </span>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>

        </article>
      </section>
    </header>
  )
}

export default Header