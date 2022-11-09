import "./styles.scss";
import { Pokemon } from "../../types";
import PokemonCard from "../PokemonCard";
import Pagination from "../Pagination";

type PokedexProps = {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  error: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
  showPagination: boolean;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
};

const index = (props: PokedexProps) => {
  return (
    <div className="pokedex-wrapper">
      <div className="main-container">
        {props.loading ? (
          <div>Loading...</div>
        ) : (
          <div className="pokemon-list">
            {props.pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                setModal={props.setModal}
                setPokemonData={props.setPokemonData}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center w-full justify-center">
        <Pagination
          setPokemonList={props.setPokemonList}
          setLoading={props.setLoading}
          page={props.page}
          setPage={props.setPage}
        />
      </div>
    </div>
  );
};

export default index;
