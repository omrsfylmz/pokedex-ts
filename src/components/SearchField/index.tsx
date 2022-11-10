import { SyntheticEvent, useState } from "react";
import { fetchPokemon } from "../../service/fetchPokemon";
import { Pokemon } from "../../types";
import Icon from "../Icon";
import "./styles.scss";

type SearchFieldProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

const Index = (props: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    props.setLoading(true);
    const requestPokemon: any = await fetchPokemon(inputValue.toLowerCase());

    requestPokemon?.response?.ok
      ? props.setPokemonList([requestPokemon.data])
      : props.setError(requestPokemon.error);

    props.setLoading(false);
    setInputValue("");
  };
  return (
    <form className="search-field-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Search for a pokemon"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="search-field-button">
        <Icon size={20} icon="search" />
      </button>
    </form>
  );
};

export default Index;
