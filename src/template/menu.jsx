import React from "react";

export default props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
    <a className="navbar-brand text-white-50" href="#">
      <i className="fa fa-calendar-check-o" /> To Do App!
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link text-white-50" href="#/todos">
            Tarefas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white-50" href="#/about">
            Sobre
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
