import React from "react";

interface DemoButtonProps {
  children: string;
  color?: string;
  onClick: () => void;
}

const DemoButton = ({
  children,
  color = "success",
  onClick,
}: DemoButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default DemoButton;
