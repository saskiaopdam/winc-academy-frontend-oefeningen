import React from "react";

function ActionSelector(props) {
  return (
    <div className="actionSelector">
      <label className="selectLabel" htmlFor="action">
        Select action
      </label>
      <select
        id="action"
        name="action"
        value={props.value}
        onChange={props.onChange}
        required
      >
        <option value="">-- Select an action --</option>
        <optgroup label="Add">
          <option value="addDentist">Add new dentist</option>
          <option value="addAssistant">Add new assistant</option>
          <option value="addPatient">Add new patient</option>
        </optgroup>
        <optgroup label="Cancel">
          <option value="cancelDentist">Cancel ill dentist</option>
          <option value="cancelAssistant">Cancel ill assistant</option>
          <option value="cancelPatient">Cancel ill patient</option>
        </optgroup>
      </select>
    </div>
  );
}

export default ActionSelector;
