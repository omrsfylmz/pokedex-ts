import { useEffect, useRef, useState } from "react";
import { Pokemon } from "./types";
import { fetchPokemonList } from "./service/fetchPokemonList";
import Pokedex from "./components/Pokedex";
import Pagination from "./components/Pagination";
import SearchField from "./components/SearchField";
import PokemonModal from "./components/PokemonModal";

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
  const searchBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setPokemonList(await fetchPokemonList(1));
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <SearchField
        setPokemonList={setPokemonList}
        setError={setError}
        setLoading={setLoading}
      />
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
      {pokemonData && modal && (
        <PokemonModal setModal={setModal} pokemonData={pokemonData} />
      )}
      {/* <Pagination
        setPokemonList={setPokemonList}
        setLoading={setLoading}
        page={page}
        setPage={setPage}
      /> */}
    </div>
  );
}

export default App;
