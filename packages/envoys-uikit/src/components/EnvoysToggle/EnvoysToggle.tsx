import React from "react";
import { EnvoysStack, EnvoysInput, EnvoysLabel } from "./StyledEnvoysToggle";
import { EnvoysToggleProps, scales } from "./types";

const EnvoysToggle: React.FC<EnvoysToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <EnvoysStack scale={scale}>
    <EnvoysInput id={props.id || "envoys-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <EnvoysLabel scale={scale} checked={checked} htmlFor={props.id || "envoys-toggle"}>
      <div className="envoyss">
        <div className="envoys" />
        <div className="envoys" />
        <div className="envoys" />
        <div className="butter" />
      </div>
    </EnvoysLabel>
  </EnvoysStack>
);

export default EnvoysToggle;
