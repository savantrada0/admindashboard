import React from "react";

type headingProps = {
  headingtitle: string;
};

const Header = ({ headingtitle }: headingProps) => {
  return <h1 className="heading">{headingtitle}</h1>;
}

export default Header;
