import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CategoryAdd from "../../components/CategoryAdd";

describe("Pruebas unitarias en el componente CategoryAdd.js", () => {
  const func = () => {};
  /************************************************************************************/
  test("se debe mostrar el componente <CategoryAdd /> correctamente", () => {
    const wrapper = shallow(<CategoryAdd setCategorias={func} />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe cambiar la caja texto", () => {
    const value = "naruto";
    const wrapper = shallow(<CategoryAdd setCategorias={func} />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    const input_ = wrapper.find("input"); // despues del cambio capturo nuevamente el input
    expect(input_.props().value).toBe(value);
  });
});
