/**
 * @file src/services/pokemon/types.ts
 * Service contract types for a specific domain module.
 */

import type { NatureResponse } from "../../types/nature";
import type {
  PokemonDetails,
  PokemonListResponse,
  PokemonSpeciesResponse,
  TypeListResponse,
} from "../../types/pokemon";

/**
 * Represents the IPokemonService data structure.
 */
export interface IPokemonService {
  getPokemonList(limit?: number, offset?: number): Promise<PokemonListResponse>;
  getPokemonDetails(nameOrId: string | number): Promise<PokemonDetails>;
  getPokemonSpecies(nameOrId: string | number): Promise<PokemonSpeciesResponse>;
  getPokemonByType(type: string): Promise<TypeListResponse>;
  getAllTypes(): Promise<TypeListResponse>;
  getNaturePokemonById(id: string): Promise<NatureResponse>;
}
