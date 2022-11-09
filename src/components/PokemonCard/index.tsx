import "./styles.scss";
import { Pokemon } from "../../types";
import { fetchPokemon } from "../../service/fetchPokemon";
import { PokemonType } from "../PokemonType";
import { pokemonTypes } from "../../colors";
import Icon from "../Icon";

type PokemonCardProps = {
  pokemon: Pokemon;
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};
const index = ({ pokemon, setModal, setPokemonData }: PokemonCardProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

  const handleClick = async () => {
    const requestPokemon = await fetchPokemon(pokemon.name);
    setPokemonData(requestPokemon.data as Pokemon);
    setModal(true);
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === pokemon.types[0].type.name
  );

  return (
    <div className="pokemon-card-container">
      <div className={`pokemon-card-overlay after:bg-${name}`} />
      <div className="pokemon-card-image">
        <img src={imgUrl} />
      </div>
      <div className="pokemon-card-number">{formatPokemonId(pokemon.id)}</div>
      <div className="pokemon-card-name">{pokemon.name} </div>
      <div className="pokemon-card-type">
        {pokemon.types.map((type, index) => {
          return (
            <PokemonType key={index} type={type.type.name} tabIndex={false} />
          );
        })}
      </div>
      <div className="pokemon-card-features">
        <div className="pokemon-card-weight">
          <Icon icon="weight" size={20} />
          {pokemon.weight} kg
        </div>
        <div className="pokemon-card-height">
          <Icon icon="heigh" size={20} />
          {pokemon.height} m
        </div>
      </div>
      <button
        className={`pokemon-card-button bg-${name}`}
        onClick={handleClick}
      >
        more details
      </button>
    </div>
  );
};

export default index;
