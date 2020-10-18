import React, { useState } from "react";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["Naruto"]);

  const categList = categorias.map((ele, index) => {
    return <GifGrid key={index} categoria={ele} />;
  });

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategorias={setCategorias} />
      <br />
      <hr />
      {categList}
    </>
  );
};

export default GifExpertApp;
