import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function HoverList() {
  const [letters, setLetters] = useState(initialLetters);

  function handleHover(letter) {
    setLetters(letters.map(iterLetter => {
      return {
        ...iterLetter,
        isHighlighted: (iterLetter.id === letter.id) ? true : false,
      }
    }));
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
