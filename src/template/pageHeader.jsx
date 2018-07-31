import React from "react";

export default props => (
  <header className="card">
    <div className="card-body">
      <h2>
        {props.name} <small>{props.small}</small>
      </h2>
    </div>
  </header>
);
