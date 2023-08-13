import { Hospital } from "@/utils/types";
import { MdMap } from "react-icons/md";
import Ring from "./Ring";

type Props = {
  data: Hospital;
  distance: number;
};

const language = 0;

export default function Card({ data, distance }: Props) {
  const getDistanceText = () => {
    if (distance < 100) return distance.toFixed(2);
    else if (distance < 1000) return distance.toFixed(0);
    return Math.floor(distance / 1000) + "k ";
  };

  return (
    <div className="shadow-md rounded-lg mb-6 p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl">{data.name[language]}</h2>
        <div className="flex items-center mt-2">
          <MdMap size={20} />
          <p className="text-base mx-2">{getDistanceText()}km</p>
          <p className="text-sm">{data.region[language]}</p>
        </div>
      </div>
      <Ring time={data.waitTimeValue} />
    </div>
  );
}
