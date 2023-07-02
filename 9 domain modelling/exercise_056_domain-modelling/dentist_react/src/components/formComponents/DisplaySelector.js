import React from "react";

function DisplaySelector(props) {
  return (
    <div className="displaySelector">
      <label className="selectLabel" htmlFor="display">
        Select display
      </label>
      <select
        id="display"
        name="display"
        value={props.value}
        onChange={props.onChange}
        required
      >
        <option value="">-- Select a display --</option>
        <optgroup label="Display">
          <option value="displayDentists">All dentists</option>
          <option value="displayAssistants">All assistants</option>
          <option value="displayPatients">All patients</option>
          <option value="displayAppointments">All appointments</option>
        </optgroup>
      </select>
    </div>
  );
}

export default DisplaySelector;
