import { useEffect } from "react";
import useStore from "../utils/store";

const Filtros = () => {
  const { generos, fetchGeneros } = useStore((state) => state);
  const {
    fechaInicio,
    setFechaInicio,
    fechaFin,
    setFechaFin,
    generoActual,
    setGeneroActual,
    cleanFilter,
    fetchPeliculas,
  } = useStore((state) => state);

  useEffect(() => {
    fetchGeneros();
  }, []);

  return (
    <div className="flex flex-col text-neutral-800">
      <div className="border rounded m-2">
        <p className="text-center mb-2 text-xl">Fecha de estreno</p>
        <div className="flex justify-center gap-4">
          <div className="flex gap-2">
            <label htmlFor="">Desde</label>
            <input
              type="number"
              className="rounded px-2"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="">Hasta</label>
            <input
              type="number"
              className="rounded px-2"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
            />
          </div>
        </div>
        <p className="text-center mb-2 text-xl">Genero</p>
        <div className="flex justify-center gap-4">
          <select
            className="rounded px-2 py-1"
            value={generoActual}
            onChange={(e) => setGeneroActual(e.target.value)}
          >
            <option value="todos">Todos</option>
            {generos.map((genero) => (
              <option value={genero.nombre} key={genero.id}>
                {genero.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-1 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-neutral-200"
          onClick={() => cleanFilter()}
        >
          Borrar
        </button>
        <button
          className="px-4 py-1 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-neutral-200"
          onClick={() => fetchPeliculas()}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Filtros;
