import { Hospital } from "@/utils/types";
import { MdMap } from "react-icons/md";
import Ring from "./Ring";
import getDistanceText from "./DistanceText";
import DistanceText from "./DistanceText";

type Props = {
  data: Hospital;
};

const language = 0;

export default function Card({ data }: Props) {
  return (
    <div className="shadow-md rounded-lg mb-6 p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl">{data.name[language]}</h2>
        <div className="flex items-center mt-2">
          <MdMap size={20} />
          <DistanceText latitude={data.latitude} longitude={data.longitude} />
          <p className="text-sm">{data.region[language]}</p>
        </div>
      </div>
      <Ring time={data.waitTimeValue} />
    </div>
  );
}
