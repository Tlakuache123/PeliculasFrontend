const PeliculaListElement = ({ data }) => {
  const genero = data.genero;

  const getGeneroColor = (genero) => {
    const nombre = genero.toLowerCase();
    if (["ciencia ficcion", "terror"].indexOf(nombre) > -1) {
      return "bg-green-500";
    }
    if (["comedia", "accion"].indexOf(nombre) > -1) {
      return "bg-blue-500";
    }
    return "bg-slate-500";
  };

  return (
    <div className="px-2 py-1 border border-gray-300 rounded flex flex-col">
      <div className="flex flex-col mb-2 text-gray-900">
        <div className="flex gap-2">
          <p className="text-xl">{data.nombre}</p>
        </div>
        <p className="text-sm">{data.director}</p>
      </div>
      <div className="text-gray-500">
        <p className="text-md truncate">{data.estudio}</p>
      </div>
      <div className="flex justify-between text-gray-400 gap-2">
        <div className={`rounded-xl px-2 ${getGeneroColor(genero)}`}>
          <p className="text-slate-900">{genero}</p>
        </div>
        <p className="font-mono text-xs">{`${data.duracion_min} min`}</p>
      </div>
    </div>
  );
};

export default PeliculaListElement;
