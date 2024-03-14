import React from "react";
import { Input } from "antd";

type inputProps = {
  name: string;
  placeholder: string;
  value: any;
  onChange: any;
  drawerlabel: string;
};

const DrawerInput = ({
  name,
  placeholder,
  onChange,
  value,
  drawerlabel,
}: inputProps) => {
  return (
    <div className="drawerinput">
      <label className="createeditlabel">{drawerlabel}</label>

      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></Input>
    </div>
  );
};

export default DrawerInput;
