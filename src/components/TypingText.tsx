"use client";

import { TypeAnimation } from "react-type-animation";

type TypingTextProps = {
  words: string[];
};

export default function TypingText({ words }: TypingTextProps) {
  return (
    <TypeAnimation
      sequence={
        words.flatMap((word) => [
          word,
          1500, // pause after typing
          "",
          500,  // pause after deleting
        ])
      }
      speed={50}
      deletionSpeed={40}
      repeat={Infinity}
      cursor={true}
    />
  );
}
