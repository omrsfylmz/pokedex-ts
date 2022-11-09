import "./styles.scss";
import { Pokemon } from "../../types";
import { fetchPokemonList } from "../../service/fetchPokemonList";
import Icon from "../Icon";

type HomeButtonProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
};

const index = (props: HomeButtonProps) => {
  const handleClick = async () => {
    props.setLoading(true);
    props.setDisabledButton(true);
    props.setPokemonList(await fetchPokemonList(1));
    props.setLoading(false);
    props.setDisabledButton(false);
    props.setPage(1);
    props.setShowPagination(true);
  };

  return (
    <button
      className="home-button"
      onClick={handleClick}
      disabled={props.disabledButton ? true : false}
    >
      <Icon size={20} icon="fire" />
      Início
    </button>
  );
};

export default index;
