/**
 * @file src/types/nature.ts
 * TypeScript models for PokeAPI response payloads.
 */

/**
 * Represents the NatureResponse data structure.
 */
export interface NatureResponse {
  decreased_stat: NamedApiResource | null
  hates_flavor: NamedApiResource | null
  id: number
  increased_stat: NamedApiResource | null
  likes_flavor: NamedApiResource | null
  move_battle_style_preferences: MoveBattleStylePreference[]
  name: string
  names: Name[]
  pokeathlon_stat_changes: PokeathlonStatChange[]
}

/**
 * Represents the NamedApiResource data structure.
 */
export interface NamedApiResource {
  name: string
  url: string
}

/**
 * Represents the MoveBattleStylePreference data structure.
 */
export interface MoveBattleStylePreference {
  high_hp_preference: number
  low_hp_preference: number
  move_battle_style: MoveBattleStyle
}

/**
 * Represents the MoveBattleStyle data structure.
 */
export interface MoveBattleStyle {
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
 * Represents the PokeathlonStatChange data structure.
 */
export interface PokeathlonStatChange {
  max_change: number
  pokeathlon_stat: PokeathlonStat
}

/**
 * Represents the PokeathlonStat data structure.
 */
export interface PokeathlonStat {
  name: string
  url: string
}
