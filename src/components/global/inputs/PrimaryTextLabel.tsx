import { type PrimaryTextLabelProps } from "@/types/TextProps";

const PrimaryTextLabel: React.FC<PrimaryTextLabelProps> = ({ content }) => {
  return (
    <p className="font-bold text-[28px] font-cursive text-secondary w-screen text-center">
      {content}
    </p>
  );
};

export default PrimaryTextLabel;
