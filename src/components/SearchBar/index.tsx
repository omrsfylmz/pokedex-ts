import "./styles.scss";
import { Pokemon } from "../../types";
import SearchField from "../SearchField";
import HomeButton from "../HomeButton";

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
};
const index = (props: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <HomeButton
        setPokemonList={props.setPokemonList}
        setLoading={props.setLoading}
        setPage={props.setPage}
        setShowPagination={props.setShowPagination}
        disabledButton={props.disabledButton}
        setDisabledButton={props.setDisabledButton}
      />
      <SearchField
        setPokemonList={props.setPokemonList}
        setError={props.setError}
        setLoading={props.setLoading}
      />
    </div>
  );
};

export default index;
