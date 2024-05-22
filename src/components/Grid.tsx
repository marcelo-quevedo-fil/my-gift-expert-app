import GridItem from "./GirdItem";
import useGetGifs from "../hooks/useGetGifs";

interface GridProps {
  value: string;
}

function Grid(props: GridProps) {
  const { value } = props;

  const { gifs, isLoading } = useGetGifs(value);

  return (
    <>
      <h2>{value}</h2>

      {isLoading && <strong>Loading...</strong>}
      <div className="card-group">
        {gifs.map((gif: any) => {
          return <GridItem key={gif.id} url={gif.url} title={gif.title} />;
        })}
      </div>
    </>
  );
}

export default Grid;
