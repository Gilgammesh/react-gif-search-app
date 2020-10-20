import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas unitarias en el componente GifGridItem.js", () => {
  const title = "un titulo";
  const url = "https://media1.giphy.com/test.gif";
  const classTest = "animate__fadeIn";
  /************************************************************************************/
  test("se debe mostrar el componente <GifGridItem /> correctamente", () => {
    const wrapper = shallow(<GifGridItem url={url} title={title} />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe tener un parrafo con titulo", () => {
    const wrapper = shallow(<GifGridItem url={url} title={title} />);
    const parraf = wrapper.find("p");
    expect(parraf.text().trim()).toBe(title);
  });
  /************************************************************************************/
  test("se debe tener la imagen una url y alt", () => {
    const wrapper = shallow(<GifGridItem url={url} title={title} />);
    const img = wrapper.find("img");
    expect(img.props().alt).toBe(title);
    expect(img.props().src).toBe(url);
  });
  /************************************************************************************/
  test("se debe tener en el div principal la clase animate__fadeIn", () => {
    const wrapper = shallow(<GifGridItem url={url} title={title} />);
    const div = wrapper.find("div");
    const className = div.props().className;
    expect(className.includes(classTest)).toBe(true);
  });
});
