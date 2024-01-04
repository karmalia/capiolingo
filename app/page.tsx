"use client";
import Image from "next/image";
import dummyData from "../dummyData.json";
import { use, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Card from "@/components/card/card";
import _ from "lodash";

const turkish = _.shuffle(dummyData.filter((item) => item.langCode === "tr"));
const english = _.shuffle(dummyData.filter((item) => item.langCode === "en"));

export default function Home() {
  const [finishedWords, setFinishedWords] = useState<string[]>([]);
  const [words, setWords] = useState({
    turkish: {
      word: "",
      matchId: "",
    },
    english: {
      word: "",
      matchId: "",
    },
  });

  console.log(words);

  useEffect(() => {
    if (words.turkish.word === "" || words.english.word === "") return;

    if (words.turkish.matchId && words.english.matchId) {
      if (words.turkish.matchId !== words.english.matchId) {
        setWords({
          turkish: {
            word: "",
            matchId: "",
          },

          english: {
            word: "",
            matchId: "",
          },
        });
      }
    }

    if (words.turkish.matchId === words.english.matchId) {
      console.log("match!");
      setFinishedWords([
        ...finishedWords,
        words.turkish.word,
        words.english.word,
      ]);
      setWords({
        turkish: {
          word: "",
          matchId: "",
        },

        english: {
          word: "",
          matchId: "",
        },
      });
    }
  }, [words]);

  return (
    <div className='flex gap-4 py-12 border-2 justify-center'>
      <div className='flex flex-col gap-4  justify-center items-center '>
        <div className='text-center  text-white text-xl'>Türkçe</div>
        {turkish.map((item, index) => (
          <Card
            key={index}
            word={{ word: item.word, matchId: item.wordId }}
            langCode={item.langCode as "tr" | "en"}
            isDone={finishedWords.includes(item.word)}
            dispatch={setWords}
            value={words}
          />
        ))}
      </div>
      <div className='flex flex-col gap-4  justify-center items-center '>
        <div className='text-center  text-white text-xl'>İngilizce</div>
        {english.map((item, index) => (
          <Card
            key={index}
            word={{ word: item.word, matchId: item.matchId }}
            langCode={item.langCode as "tr" | "en"}
            isDone={finishedWords.includes(item.word)}
            dispatch={setWords}
            value={words}
          />
        ))}
      </div>
    </div>
  );
}
