export interface PrimaryTextLabelProps {
  content: string;
  className?: string;
  username?: string;
}

export interface SecondaryTextLabelProps {
  content: string;
  className?: string;
}

export interface InputFieldProps {
  placeholder: string;
  type?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  defaultChecked?: boolean;
}
export interface TaskFieldProps {
  placeholder?: string;
  type?: string;
  value: string;
  checked?: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}
export interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}
