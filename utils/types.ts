type StringLanguages = [string, string, string];

type RegionEnglish = "NT" | "KL" | "HK" | "LT" | "Cheung Chau";
type RegionTC = "新界" | "九龍" | "香港" | "大嶼山" | "長洲";
type RegionSC = "新界" | "九龙" | "香港" | "大屿山" | "长洲";
type Region = [RegionEnglish, RegionTC, RegionSC];

export type HospitalNoWaitTime = {
  address: StringLanguages;
  cluster: StringLanguages;
  district: StringLanguages;
  latitude: number;
  longitude: number;
  name: StringLanguages;
  region: Region;
};

export type Hospital = HospitalNoWaitTime & {
  waitTimeModifier: "~" | ">";
  waitTimeText: string;
  waitTimeValue: number;
};

export type HospitalDoc = {
  apiUpdateTime: string;
  waitTimes: Hospital[];
};

export enum Language {
  Eng = 0,
  TC,
  SC,
}
