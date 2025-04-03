"use client";

import React, { useState, useEffect } from "react";

const words = ["modernas.", "interativas.", "responsivas."];

export default function ChangingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex < words[index].length) {
        setText((prev) => prev + words[index][subIndex]);
        setSubIndex((prev) => prev + 1);
      } else if (isDeleting && subIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setSubIndex((prev) => prev - 1);
      } else if (!isDeleting && subIndex === words[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return <span className="text-orange-400">{text}</span>;
}
