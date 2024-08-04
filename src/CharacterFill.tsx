import React from "react";

interface CharacterFillProps {
  position: number;
  rating: number;
  character?: string;
}

const CharacterFill: React.FC<CharacterFillProps> = ({
  position,
  rating,
  character = "★",
}) => {
  return <span>{position <= rating ? character : "☆"}</span>;
};

export default CharacterFill;
