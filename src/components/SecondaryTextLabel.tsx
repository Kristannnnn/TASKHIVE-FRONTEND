import { type SecondaryTextLabelProps } from "@/types/TextProps";
const SecondaryTextLabel: React.FC<SecondaryTextLabelProps> = ({ content, className }) => {
  return <p className={className}>{content}</p>;
};
export default SecondaryTextLabel;
