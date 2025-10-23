import axiosInstance from "../../api/axios";
import type { PokemonDetails, PokemonListResponse } from "../../types/pokemon";

export const pokemonService = {
  getPokemonList: async (
    limit = 20,
    offset = 0
  ): Promise<PokemonListResponse> => {
    const response = await axiosInstance.get<PokemonListResponse>("/pokemon", {
      params: { limit, offset },
    });
    return response.data;
  },

  getPokemonDetails: async (
    nameOrId: string | number
  ): Promise<PokemonDetails> => {
    const response = await axiosInstance.get<PokemonDetails>(
      `/pokemon/${nameOrId}`
    );
    return response.data;
  },

  getPokemonByType: async (type: string) => {
    const response = await axiosInstance.get(`/type/${type}`);
    return response.data;
  },

  getAllTypes: async () => {
    const response = await axiosInstance.get("/type");
    return response.data;
  },
};
