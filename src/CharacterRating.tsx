import React from "react";
import CharacterFill from "./CharacterFill";

interface CharacterRatingProps {
  rating: number;
  character: string;
}

const CharacterRating: React.FC<CharacterRatingProps> = ({
  rating,
  character,
}) => {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <CharacterFill
          key={value}
          position={value}
          rating={rating}
          character={character}
        />
      ))}
    </span>
  );
};

export default CharacterRating;
