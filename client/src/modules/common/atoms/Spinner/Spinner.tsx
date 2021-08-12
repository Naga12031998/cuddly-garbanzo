import { ReactElement } from "react";
import { SpinnerProps } from "./index";

const Spinner = (props: SpinnerProps): ReactElement => {
  const { status, size, type } = props;
  const className = `spinner-${type || "border"}-${size || "sm"} text-${
    status || "primary"
  }`;

  return (
    <div className={className} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
