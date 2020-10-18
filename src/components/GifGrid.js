import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ categoria }) => {
  const { data, loading } = useFetchGifs(categoria);

  const imagesList = data.map((ele) => <GifGridItem key={ele.id} {...ele} />);

  return (
    <>
      <hr />
      <h3 className="animate__animated animate__fadeIn">
        {categoria.toUpperCase()}
      </h3>
      {loading && <h4 className="animate__animated animate__flush">Cargando ...</h4>}
      <div className="card-grid">{imagesList}</div>
    </>
  );
};

export default GifGrid;
