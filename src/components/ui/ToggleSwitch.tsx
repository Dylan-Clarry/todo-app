import React from "react";
import "./ToggleSwitch.style.scss";

const ToggleSwitch = () => {
    return (
        <div className="ToggleSwitch">
            <input type="checkbox" id="check" className="toggle" />
            <label htmlFor="check"></label>
        </div>
    );
};

export default ToggleSwitch;
