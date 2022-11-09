import { SyntheticEvent } from "react";
import { pokemonTypes } from "../../colors";
import Icon from "../Icon";

import "./styles.scss";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

  console.log(name);
  return name && color ? (
    <button
      className={`bg-${name} type`}
      color={color}
      value={name}
      onClick={props.handleClick}
      tabIndex={props.tabIndex ? 0 : -1}
    >
      <Icon icon={name} size={20} />
      {name}
    </button>
  ) : (
    <span className="error">
      Ops, something went wrong. Please, try again later.
    </span>
  );
};
