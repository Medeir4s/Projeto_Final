import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Navbar (){
  return <nav className="nav">

      <ul>

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/sobre">
            Sobre
          </Link>
        </li>

        <li>
          <Link to="/servicos">
            Serviços
          </Link>
        </li>

        <li>
          <Link to="/contato  ">
            Contato
          </Link>
        </li>

      </ul>

      </nav>
};


