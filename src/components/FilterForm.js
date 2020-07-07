import React from 'react';

const buttonClasses = "btn btn-outline-dark px-5 font-weight-bold";
const inputClasses= "input-group mx-2 mb-4 font-weight-bold";
const labelClasses = "mr-2";

const buttonStyles = {
  borderRadius: 0
}

const FilterForm = (props) => {
  return (
    <form className="mt-5">
      <div className="form-inline">
        <div className={inputClasses}>
          <label 
            className={labelClasses} htmlFor="driver">Driver:</label>
          <select 
            className="form-control" 
            id="driver"
          >
            <option value={null}>Select one...</option>
            <option value="test1">Mr. Bean</option>
            <option value="test2">The Man, The Myth, The Legend</option>
            <option value="test3">Oprah Winfrey</option>
          </select>
        </div>
        <div className={inputClasses}>
          <label className={labelClasses} htmlFor="tag">Tag:</label>
          <select className="form-control" id="tag" />
        </div>
        <div className={inputClasses}>
          <button className={buttonClasses} style={buttonStyles}>Date Range</button>
        </div>
        <div className={inputClasses}>
          <label className={labelClasses} htmlFor="route">Route name:</label>
          <input className="form-control" type="text" />
        </div>
        <div className={`${inputClasses} ml-auto`}>
          <button 
            className={buttonClasses} 
            dataToggle="button"  
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

export default FilterForm;