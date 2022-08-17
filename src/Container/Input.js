import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="col-lg-12 col-xs-12 mb-30">
        <div className="form-group">
          <label>{props.label}</label>
          <input
            type={props.type}
            name={props.name}
            size={props.size}
            placeholder={props.placeholder}
            className={props.className ? props.className : "form-control-mod"}
            onClick={props.onClick}
            onChange={props.onChange}
            value={props.value}
            maxLength={props.maxLength}
            minLength={props.minLength}
            required
          />
        </div> 
      </div>
    </div>
  );
};

export default Input;
