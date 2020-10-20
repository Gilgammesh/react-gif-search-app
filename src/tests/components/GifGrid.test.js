import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas unitarias en el componente GifGrid.js", () => {
  const categoria = "naruto";
  const imgs = [
    { id: 1, title: "titulo1", url: "https://www.dominio.com/titulo1.gif" },
    { id: 2, title: "titulo2", url: "https://www.dominio.com/titulo2.gif" },
    { id: 3, title: "titulo3", url: "https://www.dominio.com/titulo3.gif" },
    { id: 4, title: "titulo4", url: "https://www.dominio.com/titulo4.gif" },
  ];
  /************************************************************************************/
  test("se debe mostrar el componente <GifGrid /> correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe mostrar items cuando se cargan imagenes con useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid categoria={categoria} />);
    const h4 = wrapper.find("h4");
    expect(h4.exists()).toBe(false);
    const comp = wrapper.find("GifGridItem");
    expect(comp.length).toBe(imgs.length);
  });
});
