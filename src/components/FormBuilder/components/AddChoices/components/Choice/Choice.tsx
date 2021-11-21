import React, { FC } from "react";

interface IProps {
  label: string;
  onClick?: () => any;
}

const Choice: FC<IProps> = ({ label, onClick }) => {
  return (
    <button className="button is-primary" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Choice;
