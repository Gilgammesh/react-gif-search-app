import React, { useState } from "react";
import PropTypes from "prop-types";

const CategoryAdd = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((categ) => [inputValue, ...categ]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="categoria"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

CategoryAdd.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default CategoryAdd;
