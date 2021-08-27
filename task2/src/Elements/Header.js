import React from 'react'

const Header = ({ onSetIsClicked }) => {
  const clicked = () => {
      onSetIsClicked(1);
      document.getElementById("titleNavbar").innerHTML= "User Data";
  }
  return (
    <div>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#titleNavbar"><strong>ZIPPY</strong> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <button onClick={clicked} className="getUser btn btn-outline-dark">Get Users</button> </a>
        </li>
      </ul>

    </div>
  </div>
</nav>
<br/><br/>
<h3 id="titleNavbar">Click on the button to get the user data</h3>

</div>
  )
}
export default Header;