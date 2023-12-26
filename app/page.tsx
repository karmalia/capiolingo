"use client";
import Image from "next/image";
import dummyData from "../dummyData.json";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [words, setWords] = useState({
    turkish: "",
    english: "",
  });

  const turkish = dummyData.filter((item) => item.langCode === "tr");
  const english = dummyData.filter((item) => item.langCode === "en");

  return (
    <div className='grid grid-cols-2 gap-4 py-3'>
      <div className='text-center text-white text-xl'>Türkçe</div>
      <div className='text-center text-white text-xl'>İngilizce</div>
      <div className='flex flex-col justify-center items-center gap-4'>
        {turkish.map((item, index) => (
          <div
            className={cn("p-4 bg-white border-black min-w-[120px]", {
              "bg-green-500": item.word === words.turkish,
            })}
            key={index}
            onClick={() => setWords({ ...words, turkish: item.word })}
          >
            {item.word}
          </div>
        ))}
      </div>
      <div className='flex flex-col justify-center items-center gap-4'>
        {english.map((item, index) => (
          <div
            className={cn("p-4 bg-white border-black min-w-[120px]", {
              "bg-green-500": item.word === words.english,
            })}
            onClick={() => setWords({ ...words, english: item.word })}
            key={index}
          >
            {item.word}
          </div>
        ))}
      </div>
    </div>
  );
}
