import { useEffect } from "react";
import useStore from "./utils/store";
import PeliculaListElement from "./components/PeliculaListElement";

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
          <p className="text-neutral-200">Bolillos Distribuidos</p>
          <div className="flex flex-col p-2 rounded gap-2 bg-gray-200">
            <ul>
              <li>Araujo Palestina Claudio Hassiel</li>
              <li>Garcia Osorio Diego</li>
              <li>Hernandez Rodriguez Alejandro</li>
              <li>Perez Delgado Alberto</li>
              <li>Melendrez Arriaga Esteban Miguel</li>
              <li>Briano Aviles Cesar Agustin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-2 rounded grow flex-1 overflow-auto relative">
        <div className="text-center rounded-t bg-neutral-700 sticky top-0 left-0 right-0">
          <p className="text-neutral-200">Lista de Peliculas</p>
        </div>
        <div className="flex flex-col p-2 rounded gap-2 bg-gray-200">
          {peliculas.map((pelicula) => (
            <PeliculaListElement key={pelicula.nombre} data={pelicula} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
