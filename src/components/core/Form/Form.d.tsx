import { TextField, Select, Checkbox, GridProps } from "@mui/material";

interface ValueProps {
  label: string | number;
  value: string | number | Object;
}

interface RuleProps {
  name: "regex" | "range" | "required" | "isNumber" | "isString";
  options?: {
    min?: number;
    max?: number;
    filter?: RegExp;
  };
  message?: string;
}

export interface FieldProps {
  name?: string;
  label?: string;
  defaultValue?: string | number;
  values?: Array<ValueProps>;
  hidden?: boolean;
  weight?: number;
  rules?: Array<RuleProps>;
  SelfProps?: typeof TextField | typeof Select | typeof Checkbox;
}

interface FormProps extends GridProps {
  url?: string;
  fields: Array<FieldProps>;
  validate?: "typing" | "submit";
  autoSubmit?: boolean;
}

export default FormProps;
