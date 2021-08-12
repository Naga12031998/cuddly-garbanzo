type SpinnerTypes = "grow" | "border";

type SpinnerSize = "sm" | "md" | "lg";

type SpinnerStatus =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

export type SpinnerProps = {
  status: SpinnerStatus;
  type: SpinnerTypes;
  size: SpinnerSize;
};
