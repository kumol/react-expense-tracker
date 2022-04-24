import React from 'react';
import './Model.css';
const Model = (props) => {
  return (
    <div className="Model">
      <p>{props.title}</p>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Model;