import { useEffect } from "react";
import useStore from "./utils/store";
import PeliculaListElement from "./components/PeliculaListElement";
import Filtros from "./components/Filtros";

const App = () => {
  const { peliculas, fetchPeliculas } = useStore((state) => state);

  useEffect(() => {
    fetchPeliculas();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-neutral-700 px-2 py-1">
        <p className="font-mono text-2xl text-center text-neutral-200">
          Mubi 2.0
        </p>
      </div>
      <div className="m-2 rounded">
        <div className="text-center rounded-t bg-neutral-700">
          <p className="text-neutral-200">Filtros</p>
        </div>
        <div className="flex flex-col overflow-y-auto max-h-96 p-2 rounded gap-2 bg-gray-200">
          <Filtros />
        </div>
      </div>
      <div className="m-2 rounded grow flex-1 overflow-auto relative">
        <div className="text-center rounded-t bg-neutral-700 sticky top-0 left-0 right-0">
          <p className="text-neutral-200">Lista de Peliculas</p>
        </div>
        <div className="flex flex-col p-2 rounded gap-2 bg-gray-200">
          {peliculas.map((pelicula) => (
            <PeliculaListElement key={pelicula.id} data={pelicula} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
