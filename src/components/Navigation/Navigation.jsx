import React from 'react';
import ArgentBankLogo from '../../designs/img/argentBankLogo.png';
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="main-nav">
        <Link className="" to ={'/Home'}>
        <a className="main-nav-logo" href="./index.html">
        
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
		</Link>
     
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
