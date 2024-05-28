import { create } from "zustand";
import axios from "axios";

const useStore = create((set, get) => ({
  // Datos completos
  peliculas: [],
  generos: [],
  fetchPeliculas: async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/peliculas/", {});
      const { data } = res;
      console.log(data);
      set({ peliculas: data });
    } catch (err) {
      consoe.error(err);
      set({ peliculas: [{}] });
    }
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
