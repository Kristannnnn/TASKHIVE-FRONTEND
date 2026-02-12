import { type PrimaryTextLabelProps } from "@/types/TextProps";

const PrimaryTextLabel: React.FC<PrimaryTextLabelProps> = ({ content }) => {
  return (
    <p className="font-bold text-[28px] font-cursive text-secondary">
      {content}
    </p>
  );
};

export default PrimaryTextLabel;
