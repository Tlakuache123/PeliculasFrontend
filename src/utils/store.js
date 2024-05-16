import { create } from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  // Datos completos
  peliculas: [],
  generos: [],
  fetchPeliculas: async () => {
    const filtros = {};

    if (get().fechaInicio && get().fechaFin) {
      filtros["fecha_inicio"] = get().fechaInicio;
      filtros["fecha_fin"] = get().fechaFin;
    }

    if (get().generoActual != "todos") {
      console.log("genero");
      filtros["genero"] = get().generoActual;
    }

    const res = await axios.get("http://localhost:8000/api/peliculas/", {
      params: filtros,
    });

    const { data } = res;
    set({ peliculas: data });
  },
  fetchGeneros: async () => {
    const res = await axios.get("http://localhost:8000/api/generos/");
    const { data } = res;

    set({ generos: data });
  },
  // Formulario de filtros
  fechaInicio: "",
  fechaFin: "",
  generoActual: "todos",
  cleanFilter: () =>
    set({ fechaInicio: "", fechaFin: "", generoActual: "todos" }),
  setFechaInicio: (value) => {
    set({ fechaInicio: value });
  },
  setFechaFin: (value) => {
    set({ fechaFin: value });
  },
  setGeneroActual: (value) => set({ generoActual: value }),
}));

export default useStore;
