import React, { useState } from "react";
import EnvoysToggle from "./EnvoysToggle";

export default {
  title: "Components/EnvoysToggle",
  component: EnvoysToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <EnvoysToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <EnvoysToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <EnvoysToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
