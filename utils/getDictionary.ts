import "server-only";
import type { Locale } from "../i18n-config";

const dictionaries = {
  en: {
    headerTitle: "HK Hospitals 🇭🇰",
    headerSubtitle: "Accident & Emergency Wait Times",
    headerSubsubtitle: "Last updated: ",
    hour: "hr",
    modalLanguage: "Language",
    modalWarning:
      "The waiting times are collated from waiting times of other patients in the past few hours. This should be used as a reference and not the current estimated waiting time",
  },
  zh: {
    headerTitle: "香港急症室等候時間 🇭🇰",
    headerSubtitle: "",
    headerSubsubtitle: "最後更新時間: ",
    hour: "小時",
    modalLanguage: "語言",
    modalWarning:
      "下列數據是統計過去數小時其他病人的最長等候時間，只供參考，並非現時預計等候時間。",
  },
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale] ?? dictionaries.en;
