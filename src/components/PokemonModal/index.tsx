import { Pokemon } from "../../types";
import "./styles.scss";
type PokemonModalProps = {
  setModal: (value: boolean) => void;
  pokemonData: Pokemon;
};

const index = ({ setModal, pokemonData }: PokemonModalProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData?.id}.png`;

  //   const [{ color }] = pokemonTypes.filter(
  //     (type) => pokemonData.types[0].type.name.indexOf(type.name) !== -1
  //   );

  const formatStatName = (statName: string) => {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
    }
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };
  return (
    <div
      className="pokemon-modal-wrapper"
      onClick={(e) => e.target === e.currentTarget && setModal(false)}
    >
      <div className="pokemon-modal-container">
        <div className="pokemon-modal-data">
          <div className="pokemon-modal-overlay">
            <div className="pokemon-modal-image">
              <img src={imgUrl} />
            </div>
            <div className="pokemon-modal-pokemon-number ">
              {pokemonData.id}
            </div>
            <div className="pokemon-modal-pokemon-name ">
              {pokemonData.name}
            </div>
            <div className="pokemon-modal-pokemon-type ">Fire</div>
            <div className="pokemon-modal-pokemon-features">
              <div className="pokemon-modal-pokemon-weight">100kg</div>
              <div className="pokemon-modal-pokemon-height">1m</div>
            </div>
          </div>
        </div>
        <div className="pokemon-modal-divider ">x</div>
        <div className="pokemon-modal-stats">
          <div className="pokemon-modal-stats-title">Stats</div>
          <div className="pokemon-modal-stats-list">
            <div className="pokemon-modal-progress-bar "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
