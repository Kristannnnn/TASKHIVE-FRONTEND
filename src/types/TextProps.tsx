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
}
export interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
}
