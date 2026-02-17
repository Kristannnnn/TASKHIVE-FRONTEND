import PrimaryTextLabel from "@/components/PrimaryTextLabel";
import { useParams } from "react-router-dom";

export default function TaskDisplayCard() {
  const { category } = useParams<{ category: string }>();
  return (
    <div className="border-2 mt-16 rounded-3xl p-8 mx-[10%] h-150 bg-container flex flex-col items-start ">
      <PrimaryTextLabel content={` ${category?.toUpperCase()}  TASK`} />
    </div>
  );
}
