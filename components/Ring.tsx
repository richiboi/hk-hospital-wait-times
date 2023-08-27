import React from "react";
import { translations } from "../utils/translations";
import { Locale } from "@/i18n-config";

const getRingColorClass = (time: number) => {
  if (time < 3) {
    return "border-green-500";
  } else if (time < 5) {
    return "border-yellow-500";
  }
  return "border-red-500";
};

type Props = {
  time: number;
  lang: Locale;
};

enum LangMap {
  en,
  zh,
}

const Ring = ({ time, lang }: Props) => {
  const ringColorClass = getRingColorClass(time);

  return (
    <div
      className={`shrink-0 w-16 h-16 rounded-full border-8 ${ringColorClass} flex items-center justify-center text-center`}
    >
      <h1 className="text-lg">{time}</h1>
      <p>
        {lang === "en"
          ? "hr" + (time > 1 ? "s" : "")
          : translations.hour[LangMap[lang]]}
      </p>
    </div>
  );
};

export default Ring;
