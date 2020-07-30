import React from 'react';

const buttonClasses = "btn btn-outline-dark px-5 font-weight-bold";
const inputClasses = "input-group mx-2 mb-4 font-weight-bold";
const labelClasses = "mr-2";

const buttonStyles = {
  borderRadius: 0
}

const dateDialogStyles = {
  border: "1px solid #000",
  top: "-15px"
}

const inputStyles = {
  width: "12.9rem"
}

const Filter = (props) => {
  return (
    <form className="mt-3">
      <div className="row justify-content-center">
        <div
          className={`col-4 p-3 ${(props.data.dateToggle ? 'visible' : 'invisible')}`}
          onBlur={(e) => props.handleToggle(e)}
          style={dateDialogStyles}
        >
          <input 
            className="mr-3" 
            onChange={(e) => props.handleChange(e)}
            style={inputStyles} 
          />
          to
          <input 
            className="ml-3" 
            onChange={(e) => props.handleChange(e)}
            style={inputStyles} 
          />
        </div>
      </div>
      <div className="form-inline">
        <div className={inputClasses}>
          <label
            className={labelClasses} htmlFor="driver">Driver:</label>
          <select
            className="form-control"
            id="driver"
            onChange={(e) => props.handleChange(e)}
          >
            <option value={""}>Select one...</option>
            <option value="test1">Mr. Bean</option>
            <option value="test2">The Man, The Myth, The Legend</option>
            <option value="test3">Oprah Winfrey</option>
          </select>
        </div>
        <div className={inputClasses}>
          <label 
            className={labelClasses} 
            htmlFor="tag"
          >
            Tag:
          </label>
          <select 
            className="form-control" 
            id="tag"
            onChange={(e) => props.handleChange(e)}
          >
            <option value={""}></option>
            <option value="test1">Deliveries</option>
            <option value="test2">Pickups</option>
            <option value="test3">SFD-Junction City</option>
            <option value="test4">Ohio Valley Area</option>
          </select>
        </div>
        <div className={inputClasses}>
          <button 
            className={buttonClasses} 
            onClick={(e) => props.handleToggle(e)}
            style={buttonStyles}
          >
            Date Range
          </button>
        </div>
        <div className={inputClasses}>
          <label className={labelClasses} htmlFor="route">Route name:</label>
          <input 
            className="form-control" 
            id="route"
            onChange={(e) => props.handleChange(e)}
            type="text" 
          />
        </div>
        <div className={`${inputClasses} ml-auto`}>
          <button
            className={buttonClasses}
            onClick={props.onFilter}
            style={buttonStyles}
            type="submit"
          >
            Filter
        </button>
        </div>
      </div>
    </form>
  )
}

export default Filter;