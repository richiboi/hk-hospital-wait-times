import Card from "@/components/Card";
import { getHospitalData } from "@/utils/api";
import { getDistanceFromLatLonInKm } from "@/utils/distance";
import { translations } from "@/utils/translations";
import Image from "next/image";

const language = 0;

export default async function Home() {
  const hospitalData = await getHospitalData();

  return (
    <div className="w-screen min-h-screen p-4 box-border">
      <div className="flex w-full justify-between my-5 items-center">
        <div className="flex flex-col space-y-1">
          <h1 className="text-xl">{translations.header.title[language]}</h1>
          <h2 className="text-base text-gray-700 font-medium">
            {translations.header.subtitle[language]}
          </h2>
          <h3 className="text-sm text-gray-500 font-light">
            {translations.header.subsubtitle[language]}{" "}
            {/* {hospitalData?.apiUpdateTime} */}
          </h3>
        </div>
        {/* <SettingsModal /> */}
      </div>

      <div className="mb-2.5">
        {hospitalData.map((hospital) => (
          <Card data={hospital} key={hospital.name[0]} />
        ))}
      </div>
    </div>
  );
}
