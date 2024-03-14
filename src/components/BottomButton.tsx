import React from "react";
import { Button } from "antd";

type btnProps = {
  btntext: string;
};

const BottomButton = ({ btntext }: btnProps) => {
  return (
    <Button htmlType="submit" className="btnbottom" type="primary">
      {btntext}
    </Button>
  );
};

export default BottomButton;
