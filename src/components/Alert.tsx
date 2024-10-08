/* 
function Alert() {}
export default Alert;
^^ shortcut: "rafce"
*/

import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  // "children" is a special prop keyword that all React components support
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
