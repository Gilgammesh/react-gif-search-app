import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CategoryAdd from "../../components/CategoryAdd";

describe("Pruebas unitarias en el componente CategoryAdd.js", () => {
  const setCategorias = jest.fn();
  const func = () => {};
  const value = "naruto";

  /************************************************************************************/
  test("se debe mostrar el componente <CategoryAdd /> correctamente", () => {
    const wrapper = shallow(<CategoryAdd setCategorias={setCategorias} />);
    expect(wrapper).toMatchSnapshot();
  });
  /************************************************************************************/
  test("se debe cambiar la caja texto", () => {
    const wrapper = shallow(<CategoryAdd setCategorias={setCategorias} />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    const input_ = wrapper.find("input"); // despues del cambio capturo nuevamente el input
    expect(input_.props().value).toBe(value);
  });
  /************************************************************************************/
  test("se debe enviar el valor del input vacia en con submit y no ejecutar setCategorias", () => {
    const wrapper = shallow(<CategoryAdd setCategorias={func} />);
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: func });
    expect(setCategorias).not.toHaveBeenCalled();
  });
  /************************************************************************************/
  test("se debe enviar el valor del input con submit, ejecutar setCategorias y setInputValue", () => {
    const wrapper = shallow(<CategoryAdd setCategorias={setCategorias} />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: func });
    expect(setCategorias).toHaveBeenCalledTimes(1);
    expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));
    const input_ = wrapper.find("input");
    const value_ = input_.props().value;
    expect(value_).toBe("");
  });
});
