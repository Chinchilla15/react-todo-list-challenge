import { UseFormRegister } from "react-hook-form";
import { FieldError } from "react-hook-form";

export interface FormFieldProps {
  label: string;
  id: string;
  type: "text" | "number" | "date" | "select";
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface Task {
  taskName: string;
  priority: string;
  storyPoints: number;
  asignee: string;
  dueDate: string;
}

export interface TaskBoxProps {
  name: string;
  priority: string;
  points: number;
  asignee: string;
  dueDate: string;
}

export interface DialogProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface FormFieldProps {
  label: string;
  id: string;
  type: "text" | "number" | "date" | "select";
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  options?: { value: string; label: string }[];
  placeholder?: string;
}
