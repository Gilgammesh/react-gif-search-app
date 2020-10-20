import React, { useState } from "react";
import PropTypes from "prop-types";
import CategoryAdd from "./components/CategoryAdd";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategorias }) => {
  const [categorias, setCategorias] = useState(defaultCategorias);

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

GifExpertApp.propTypes = {
  defaultCategorias: PropTypes.array,
};

GifExpertApp.defaultProps = {
  defaultCategorias: ["Naruto"],
};

export default GifExpertApp;
