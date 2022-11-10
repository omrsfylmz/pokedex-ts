import usePagination from "@mui/material/usePagination";
import { fetchPokemonList } from "../../service/fetchPokemonList";
import { Pokemon } from "../../types";
import Icon from "../Icon";
import "./styles.scss";

type UsePaginationProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
};

const Index = (props: UsePaginationProps) => {
  const handleChange = async (e: React.ChangeEvent<unknown>, value: number) => {
    props.setPage(value);

    props.setLoading(true);
    props.setPokemonList(await fetchPokemonList(value));
    props.setLoading(false);
  };

  const { items } = usePagination({
    count: 10,
    siblingCount: 0,
    page: props.page,
    onChange: handleChange,
  });

  return (
    <nav>
      <ul className="pagination">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = <span className="elipsis"> …</span>;
          } else if (type === "page") {
            children = (
              <button
                className="button"
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item} className="button">
                {type === "previous" ? (
                  <Icon icon="left" size={30} />
                ) : (
                  <Icon icon="right" size={30} />
                )}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Index;
