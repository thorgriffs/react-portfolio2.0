import React from 'react'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg" style={{color: 'white'}}>
      <a className="navbar navbar-brand me" href="/">Kelli King</a>
      <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
              <a className="nav-link active" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
          </li>        
        </ul>
      </div>      
    </nav>  
    )
}

export default Navbar