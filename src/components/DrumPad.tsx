"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "../redux/drumSlice";

interface DrumPadProps {
  id: string;
  letter: string;
  audioSrc: string;
}

const DrumPad: React.FC<DrumPadProps> = ({ id, letter, audioSrc }) => {
  const dispatch = useDispatch();

  const playSound = () => {
    const audio = document.getElementById(letter) as HTMLAudioElement;
    audio.play();
    dispatch(setDisplay(id));
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key.toUpperCase() === letter) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <button
      id={id}
      className="drum-pad p-4 m-2 bg-blue-600 text-white rounded-lg"
      onClick={playSound}
    >
      {letter}
      <audio id={letter} className="clip" src={audioSrc}></audio>
    </button>
  );
};

export default DrumPad;
