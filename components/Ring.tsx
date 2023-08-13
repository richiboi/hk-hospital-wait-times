import React from "react";
import { translations } from "../utils/translations";

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
};

const language = 0;

const Ring = ({ time }: Props) => {
  const ringColorClass = getRingColorClass(time);

  return (
    <div
      className={`w-16 h-16 rounded-full border-8 ${ringColorClass} flex items-center justify-center text-center leading-snug`}
    >
      <h1 className="text-lg mb-[-3px]">{time}</h1>
      <p>
        {true
          ? // language === Language.Eng
            "hr" + (time > 1 ? "s" : "")
          : translations.hour[language]}
      </p>
    </div>
  );
};

export default Ring;
