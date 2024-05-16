const PeliculaListElement = ({ data }) => {
  const genero = data.generos[0];

  const getGeneroColor = (genero) => {
    const nombre = genero.toLowerCase();
    if (["ciencia ficción", "terror", "drama"].indexOf(nombre) > -1) {
      return "bg-green-500";
    }
    if (["cine negro", "romance", "misterio"].indexOf(nombre) > -1) {
      return "bg-blue-500";
    }
    return "bg-slate-500";
  };

  return (
    <div className="px-2 py-1 border border-gray-300 rounded flex flex-col">
      <div className="flex flex-col mb-2 text-gray-900">
        <div className="flex gap-2">
          <p className="text-xl">{data.titulo}</p>
          <p className="text-lg text-gray-400 text-md">{data.ano}</p>
        </div>
        <p className="text-sm">{data.director.nombre}</p>
      </div>
      <div className="ml-2 text-gray-500">
        <p className="text-md truncate">{data.sinopsis}</p>
      </div>
      <div className="flex justify-between text-gray-400 gap-2">
        <div className={`rounded-xl px-2 ${getGeneroColor(genero.nombre)}`}>
          <p className="text-slate-900">{genero.nombre}</p>
        </div>
        <p className="font-mono text-xs">{`${data.duracion} min`}</p>
      </div>
    </div>
  );
};

export default PeliculaListElement;
