import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="col-lg-12 col-sm-6 mb-30">
        <div className="form-group">
          <label>{props.label}</label>
          <input
            type={props.type}
            name={props.name}
            size={props.size}
            className={props.className ? props.className : "form-control-mod"}
            onClick={props.onClick}
            onChange={props.onChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
