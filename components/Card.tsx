import { Hospital } from "@/utils/types";
import { MdMap } from "react-icons/md";
import Ring from "./Ring";
import getDistanceText from "./DistanceText";
import DistanceText from "./DistanceText";
import { getDictionary } from "@/utils/getDictionary";
import { Locale } from "@/i18n-config";

type Props = {
  data: Hospital;
  lang: Locale;
};

// Temporary fix
enum LangMap {
  en,
  zh,
}

export default async function Card({ data, lang }: Props) {
  return (
    <div className="shadow-md rounded-lg mb-6 p-4 flex justify-between items-center gap-2">
      <div>
        <h2 className="text-xl">{data.name[LangMap[lang]]}</h2>
        <div className="flex items-center mt-2">
          <MdMap size={20} />
          <DistanceText latitude={data.latitude} longitude={data.longitude} />
          <p className="text-sm">{data.region[LangMap[lang]]}</p>
        </div>
      </div>
      <Ring time={data.waitTimeValue} lang={lang} />
    </div>
  );
}
