import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas unitarias en el componente GifExpertApp.js", () => {
  const categorias = ["Samurai X", "Saitama", "Naruto"];
  /************************************************************************************/
  test("se debe mostrar el componente <GifExpertApp /> correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe mostrar una lista de categorias", () => {
    const wrapper = shallow(<GifExpertApp defaultCategorias={categorias} />);
    expect(wrapper).toMatchSnapshot();
    const grids = wrapper.find("GifGrid");
    expect(grids.length).toBe(categorias.length);
  });
});
