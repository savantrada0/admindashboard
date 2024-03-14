import React from "react";
import { Form, Input } from "antd";

type inputProps = {
  classname: string;
  name: string;
  message: string;
  placeholder: string;
  label: string;
  value: any;
  onChange: any;
};

const Inputbox = ({
  classname,
  name,
  message,
  placeholder,
  label,
  onChange,
  value,
}: inputProps) => {
  return (
    <Form.Item
      className={classname}
      label={<label style={{ color: "#747C89" }}>{label}</label>}
      rules={[{ required: true, message: `${message}` }]}
    >
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      ></Input>
    </Form.Item>
  );
};

export default Inputbox;
