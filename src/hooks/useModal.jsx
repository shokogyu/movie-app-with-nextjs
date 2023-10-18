import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMovie, setActiveMovie] = useState([]);

  const handleClick = (movie) => {
    setActiveMovie(movie);
    setIsOpen(true);
  };

  return { isOpen, setIsOpen, activeMovie, setActiveMovie, handleClick };
};
