import { useEffect, useState } from "react";

// Definição do tipo para a função useMediaQuery
const useMediaQuery = (query: string): boolean => {
  // Estado para armazenar se a media query é verdadeira ou falsa
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Função que verifica se a media query corresponde
    const matchMedia = window.matchMedia(query);

    // Função que será chamada quando a media query mudar
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Adiciona o listener ao matchMedia
    matchMedia.addEventListener("change", handleChange);

    // Define o estado inicial
    setMatches(matchMedia.matches);

    // Cleanup do listener quando o componente desmontar
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
