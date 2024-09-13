import { useState } from "react";

interface MyButtonProps {
  buttonLabel: string;
}

function MyButton({ buttonLabel }: MyButtonProps) {
  const [isPrimary, setPrimary] = useState(true);

  const toggleButtonColor = () => {
    setPrimary(!isPrimary);
  };

  return (
    <>
      <button
        className={isPrimary ? "btn btn-primary" : "btn btn-secondary"}
        onClick={toggleButtonColor}
      >
        {buttonLabel}
      </button>
    </>
  );
}

export default MyButton;
