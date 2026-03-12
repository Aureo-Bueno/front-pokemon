import type { NatureResponse } from "../../types/nature";
import type {
  PokemonDetails,
  PokemonListResponse,
  PokemonSpeciesResponse,
  TypeListResponse,
} from "../../types/pokemon";

export interface IPokemonService {
  getPokemonList(limit?: number, offset?: number): Promise<PokemonListResponse>;
  getPokemonDetails(nameOrId: string | number): Promise<PokemonDetails>;
  getPokemonSpecies(nameOrId: string | number): Promise<PokemonSpeciesResponse>;
  getPokemonByType(type: string): Promise<TypeListResponse>;
  getAllTypes(): Promise<TypeListResponse>;
  getNaturePokemonById(id: string): Promise<NatureResponse>;
}
