import { type SecondaryTextLabelProps } from "@/types/TextProps";
const SecondaryTextLabel: React.FC<SecondaryTextLabelProps> = ({ content }) => {
  return <p className="text-center font-cursive">{content}</p>;
};
export default SecondaryTextLabel;
