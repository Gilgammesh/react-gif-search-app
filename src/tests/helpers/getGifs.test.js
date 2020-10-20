import "@testing-library/jest-dom";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas unitarias en la funcion de ayuda getGifs.js", () => {
  const filter = "naruto";
  /************************************************************************************/
  test("se debe obtener 10 elementos de respuesta", async () => {
    const gifs = await getGifs(filter);
    expect(gifs.length).toBe(10);
  });
  /************************************************************************************/
  test("se debe obtener nulo si no enviamos la categoria", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
