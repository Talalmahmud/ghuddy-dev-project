import React from "react";

type Props = {
  buttonStyle: string;
  buttonTitle: string;
};

const Button = ({ buttonStyle, buttonTitle }: Props) => {
  return <div className={`${buttonStyle}`}>{buttonTitle}</div>;
};

export default Button;
