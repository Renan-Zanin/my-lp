import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed: number;
  deletingSpeed: number;
  delay: number;
}

export default function TypingEffect({
  words,
  delay,
  deletingSpeed,
  typingSpeed,
}: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
      return () => clearTimeout(timeout);
    }
  }, [
    subIndex,
    isDeleting,
    words,
    wordIndex,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 text-center md:text-4xl text-xl font-semibold">
      {`${words[wordIndex].substring(0, subIndex)}`}
    </span>
  );
}
