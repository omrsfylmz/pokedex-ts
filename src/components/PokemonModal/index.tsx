import React from "react";
import { Pokemon } from "../../types";
import { CardOverlay } from "./style";
import Icon from "../Icon";
import { PokemonType } from "../PokemonType";
import LinearProgressWithLabel from "../ProgressLine";
import "./styles.scss";
import { pokemonTypes } from "../../colors";
type PokemonModalProps = {
  setModal: (value: boolean) => void;
  pokemonData: Pokemon;
};

const index = ({ setModal, pokemonData }: PokemonModalProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData?.id}.png`;

  const [{ color }] = pokemonTypes.filter(
    (type) => pokemonData.types[0].type.name.indexOf(type.name) !== -1
  );

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
      onClick={(e: { target: any; currentTarget: any }) =>
        e.target === e.currentTarget && setModal(false)
      }
    >
      <div className="pokemon-modal-container">
        <div className="pokemon-modal-data">
          <CardOverlay color={color} />
          <div className="pokemon-modal-image">
            <img src={imgUrl} />
          </div>
          <div className="pokemon-modal-pokemon-number ">
            {formatPokemonId(pokemonData.id)}
          </div>
          <div className="pokemon-modal-pokemon-name ">{pokemonData.name}</div>
          <div className="pokemon-modal-pokemon-type ">
            {pokemonData.types.map((type, index) => {
              return (
                <PokemonType
                  key={index}
                  type={type.type.name}
                  tabIndex={false}
                />
              );
            })}
          </div>
          <div className="pokemon-modal-pokemon-features">
            <div className="pokemon-modal-pokemon-weight">
              <Icon icon="weight" size={20} />
              {pokemonData.weight} kg
            </div>
            <div className="pokemon-modal-pokemon-height">
              <Icon icon="heigh" size={20} />
              {pokemonData.height} m
            </div>
          </div>
        </div>
        <div className="pokemon-modal-divider ">
          <Icon icon="normal" size={55} color="#fff" />
        </div>
        <div className="pokemon-modal-stats">
          <div className="pokemon-modal-stats-title">Stats</div>
          <div className="pokemon-modal-stats-list">
            {pokemonData.stats.map(({ stat, base_stat }) =>
              React.Children.toArray(
                <li className="flex justify-around">
                  <span>{formatStatName(stat.name)}</span>
                  <span>{base_stat}</span>
                  <LinearProgressWithLabel value={base_stat} />
                </li>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
