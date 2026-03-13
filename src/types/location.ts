/**
 * @file src/types/location.ts
 * TypeScript models for PokeAPI response payloads.
 */

/**
 * Represents the LocationResponse data structure.
 */
export interface LocationResponse {
  areas: Area[]
  game_indices: Index[]
  id: number
  name: string
  names: Name[]
  region: Region | null
}

/**
 * Represents the Area data structure.
 */
export interface Area {
  name: string
  url: string
}

/**
 * Represents the Index data structure.
 */
export interface Index {
  game_index: number
  generation: Generation
}

/**
 * Represents the Generation data structure.
 */
export interface Generation {
  name: string
  url: string
}

/**
 * Represents the Name data structure.
 */
export interface Name {
  language: Language
  name: string
}

/**
 * Represents the Language data structure.
 */
export interface Language {
  name: string
  url: string
}

/**
 * Represents the Region data structure.
 */
export interface Region {
  name: string
  url: string
}
