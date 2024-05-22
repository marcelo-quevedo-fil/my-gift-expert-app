interface GridItemProps {
  url: string;
  title: string;
}

function GridItem(props: GridItemProps) {
  const { url, title } = props;

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </>
  );
}

export default GridItem;
