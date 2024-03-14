import React from "react";

type viewinfoProps = {
  infolabel: string;
  infovalue: string;
};

const ViewInfofield = ({ infolabel, infovalue }: viewinfoProps) => {
  return (
    <div className="infofield">
      <h1 className="infolabel">{infolabel} :</h1>
      <p>{infovalue}</p>
    </div>
  );
};

export default ViewInfofield;
