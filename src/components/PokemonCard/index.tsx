import "./styles.scss";
import { Pokemon } from "../../types";
import { fetchPokemon } from "../../service/fetchPokemon";

// type PokemonCardProps = {
//   pokemon: Pokemon;
//   setModal: (value: boolean) => void;
//   setPokemonData: (data: Pokemon | null) => void;
// };
const index = () => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`;

  //   const handleClick = async () => {
  //     const requestPokemon = await fetchPokemon(pokemon.name);
  //     setPokemonData(requestPokemon.data);
  //     setModal(true);
  //   };

  //   const formatPokemonId = (id: number) => {
  //     if (id < 10) return `#00${id}`;
  //     else if (id >= 10 && id < 99) return `#0${id}`;
  //     else return `#${id}`;
  //   };

  return (
    <div className="pokemon-card-container">
      <div className="pokemon-card-overlay" />
      <div className="pokemon-card-image">
        <img src={imgUrl} alt="photo" />
      </div>
      <div className="pokemon-card-number">#003</div>
      <div className="pokemon-card-name">Bulbasaur </div>
      <div className="pokemon-card-type">Fire </div>
      <div className="pokemon-card-features">
        <div className="pokemon-card-weight">1m</div>
        <div className="pokemon-card-height">200kg</div>
      </div>
    </div>
  );
};

export default index;
