import React, { useState } from "react";
import "../styles/Menu.css";
import ActionSelector from "./formComponents/ActionSelector";
import DisplaySelector from "./formComponents/DisplaySelector";
import FormDisplay from "./formComponents/FormDisplay";
import ListDisplay from "./listComponents/ListDisplay";

function Menu() {
  const [action, setAction] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div>
      <div className="selectors">
        <ActionSelector
          value={action}
          onChange={(event) => setAction(event.target.value)}
        />
        <DisplaySelector
          value={display}
          onChange={(event) => setDisplay(event.target.value)}
        />
      </div>

      <div className="displays">
        {action ? <FormDisplay value={action} /> : null}
        {display ? <ListDisplay value={display} /> : null}
      </div>
    </div>
  );
}

export default Menu;
