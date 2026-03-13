/**
 * @file src/types/item.ts
 * TypeScript models for PokeAPI response payloads.
 */

/**
 * Represents the ItemResponse data structure.
 */
export interface ItemResponse {
  attributes: Attribute[]
  baby_trigger_for: string
  category: Category
  cost: number
  effect_entries: EffectEntry[]
  flavor_text_entries: FlavorTextEntry[]
  fling_effect: string
  fling_power: string
  game_indices: Index[]
  held_by_pokemon: string[]
  id: number
  machines: string[]
  name: string
  names: Name[]
  sprites: Sprites
}

/**
 * Represents the Attribute data structure.
 */
export interface Attribute {
  name: string
  url: string
}

/**
 * Represents the Category data structure.
 */
export interface Category {
  name: string
  url: string
}

/**
 * Represents the EffectEntry data structure.
 */
export interface EffectEntry {
  effect: string
  language: Language
  short_effect: string
}

/**
 * Represents the Language data structure.
 */
export interface Language {
  name: string
  url: string
}

/**
 * Represents the FlavorTextEntry data structure.
 */
export interface FlavorTextEntry {
  language: Language2
  text: string
  version_group: VersionGroup
}

/**
 * Represents the Language2 data structure.
 */
export interface Language2 {
  name: string
  url: string
}

/**
 * Represents the VersionGroup data structure.
 */
export interface VersionGroup {
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
  language: Language3
  name: string
}

/**
 * Represents the Language3 data structure.
 */
export interface Language3 {
  name: string
  url: string
}

/**
 * Represents the Sprites data structure.
 */
export interface Sprites {
  default: string
}
