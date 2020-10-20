import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas unitarias en la funcion de ayuda useFetchGifs.js", () => {
  const categoria = "naruto";
  /************************************************************************************/
  test("se debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(categoria)
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  /************************************************************************************/
  test("se debe retornar un arreglo de imagenes y la carga en false", async () => {
    const gifs = await getGifs("naruto");
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(categoria)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toEqual(gifs);
    expect(loading).toBe(false);
  });
});
