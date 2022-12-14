import { useEffect, useRef, useState } from "react";
import { Pokemon } from "./types";
import { fetchPokemonList } from "./service/fetchPokemonList";
import Pokedex from "./components/Pokedex";
import PokemonModal from "./components/PokemonModal";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [modal, setModal] = useState(false);
  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonAmount, setPokemonAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setPokemonList(await fetchPokemonList(1));
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <SearchBar
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setPokemonAmount={setPokemonAmount}
        setError={setError}
        setLoading={setLoading}
        setPage={setPage}
        setShowPagination={setShowPagination}
        disabledButton={disabledButton}
        setDisabledButton={setDisabledButton}
      />
      {error ? (
        <ErrorMessage />
      ) : (
        <Pokedex
          setModal={setModal}
          setPokemonData={setPokemonData}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
          pokemonAmount={pokemonAmount}
          setPokemonAmount={setPokemonAmount}
          error={error}
          loading={loading}
          setLoading={setLoading}
          page={page}
          setPage={setPage}
          showPagination={showPagination}
          setShowPagination={setShowPagination}
          disabledButton={disabledButton}
        />
      )}

      {pokemonData && modal && (
        <PokemonModal setModal={setModal} pokemonData={pokemonData} />
      )}
    </div>
  );
}

export default App;
