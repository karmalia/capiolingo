import { cn } from "@/lib/utils";
import React, { Dispatch, ElementRef, SetStateAction } from "react";

type Props = {
  isDone: boolean;
  word: { word: string; matchId: string };

  langCode: "tr" | "en";
  dispatch: Dispatch<
    SetStateAction<{
      turkish: {
        word: string;
        matchId: string;
      };
      english: {
        word: string;
        matchId: string;
      };
    }>
  >;
  value: {
    turkish: { word: string; matchId: string };
    english: { word: string; matchId: string };
  };
};

enum ELangCode {
  "tr" = "turkish",
  "en" = "english",
}

function Card({ isDone, word, dispatch, value, langCode }: Props) {
  return (
    <div
      className={cn(
        "p-4 bg-transparent text-green-500 font-bold border-2 border-green-500 rounded-xl min-w-[120px]",
        {
          "bg-green-500 text-white":
            word.word === value[ELangCode[langCode]].word,
          "animate-fadeOut": isDone,
        }
      )}
      onClick={() => dispatch({ ...value, [ELangCode[langCode]]: word })}
    >
      {word.word}
    </div>
  );
}

export default Card;
