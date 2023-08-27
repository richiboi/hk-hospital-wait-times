import Card from "@/components/Card";
import { Locale } from "@/i18n-config";
import { getHospitalData } from "@/utils/api";
import { getDistanceFromLatLonInKm } from "@/utils/distance";
import { getDictionary } from "@/utils/getDictionary";
import { translations } from "@/utils/translations";
import Image from "next/image";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const { hospitalData, updateTime } = await getHospitalData();

  return (
    <div className="w-screen min-h-screen p-4 box-border">
      <div className="flex w-full justify-between my-5 items-center">
        <div className="flex flex-col space-y-1">
          <h1 className="text-xl">{dict.headerTitle}</h1>
          <h2 className="text-base text-gray-700 font-medium">
            {dict.headerSubtitle}
          </h2>
          <h3 className="text-sm text-gray-500 font-light">
            {dict.headerSubsubtitle}
            {updateTime}
          </h3>
        </div>
        {/* <SettingsModal /> */}
      </div>

      <div className="mb-2.5">
        {hospitalData.map((hospital) => (
          <Card data={hospital} key={hospital.name[0]} lang={lang} />
        ))}
      </div>
    </div>
  );
}
