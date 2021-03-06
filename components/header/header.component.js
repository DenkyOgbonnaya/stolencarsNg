import Link from "next/link";
import { useState } from "react";

const HeaderComponent = () => {
  const[isCollapsed, setIsCollapsed] = useState(true);
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark ">
  <a className="navbar-brand" href="/">
    <img src="/icons/taxi.png" alt="logo" height="50px" width="50px" /> {" "}
      <b style={{fontSize:"20px"}}>StolenCars</b></a>
    <button onClick={ () => setIsCollapsed(!isCollapsed)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={`${isCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarSupportedContent">
    
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link href="/">
          <a className="nav-link">Home </a>
        </Link> 
      </li>
      <li className="nav-item">
        <Link href="/report-stolen-car">
          <a className="nav-link" >Report car </a>
        </Link>
        
      </li>
      <li className="nav-item">
        <Link href="/remove-stolen-car">
          <a className="nav-link" >Remove car</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/decode-vin">
          <a className="nav-link" >Decode vin</a>
        </Link>
      </li>
    </ul>
  </div>
    <style jsx>{`
        .navbar {
            background: #162252;
        }
        .navbar-brand {
          color: yellow;
          font-size: 20px;
        }
        .navbar-brand>span {
          font-size:20px;
        }
    `}</style>
</nav>
        
    )
}

export default HeaderComponent;