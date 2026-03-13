/**
 * @file src/services/pokemon/index.ts
 * Service methods that wrap PokeAPI requests for a specific domain.
 */

import axiosInstance from "../../api/axios";
import type { NatureResponse } from "../../types/nature";
import type {
  PokemonDetails,
  PokemonListResponse,
  PokemonSpeciesResponse,
  TypeListResponse,
} from "../../types/pokemon";
import type { IPokemonService } from "./types";

/**
 * Service implementation for Pokemon-related API resources.
 */
export const pokemonService: IPokemonService = {
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

  getPokemonSpecies: async (
    nameOrId: string | number
  ): Promise<PokemonSpeciesResponse> => {
    const response = await axiosInstance.get<PokemonSpeciesResponse>(
      `/pokemon-species/${nameOrId}`
    );
    return response.data;
  },

  getPokemonByType: async (type: string): Promise<TypeListResponse> => {
    const response = await axiosInstance.get<TypeListResponse>(`/type/${type}`);
    return response.data;
  },

  getAllTypes: async (): Promise<TypeListResponse> => {
    const response = await axiosInstance.get<TypeListResponse>("/type");
    return response.data;
  },

  getNaturePokemonById: async (id: string): Promise<NatureResponse> => {
    const response = await axiosInstance.get<NatureResponse>(`/nature/${id}`);
    return response.data;
  },
};
