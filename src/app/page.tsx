"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DrumPad from "../components/DrumPad";

const drumPads = [
  {
    id: "Heater-1",
    letter: "Q",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    id: "Heater-2",
    letter: "W",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    id: "Heater-3",
    letter: "E",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    id: "Heater-4",
    letter: "A",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    id: "Clap",
    letter: "S",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    id: "Open-HH",
    letter: "D",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    id: "Kick-n-Hat",
    letter: "Z",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    id: "Kick",
    letter: "X",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    id: "Closed-HH",
    letter: "C",
    audioSrc:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

export default function Home() {
  const display = useSelector((state: RootState) => state.drum.display);

  return (
    <div id="drum-machine" className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Drum Machine</h1>
      <div id="display" className="mb-4 p-4 bg-gray-200 rounded-lg">
        {display}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            letter={pad.letter}
            audioSrc={pad.audioSrc}
          />
        ))}
      </div>
    </div>
  );
}
