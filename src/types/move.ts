/**
 * @file src/types/move.ts
 * TypeScript models for PokeAPI response payloads.
 */


/**
 * Represents the MoveResponse data structure.
 */
export interface MoveResponse {
  accuracy: number
  contest_combos: ContestCombos
  contest_effect: ContestEffect
  contest_type: ContestType
  damage_class: DamageClass
  effect_chance: string
  effect_changes: string[]
  effect_entries: EffectEntry[]
  flavor_text_entries: FlavorTextEntry[]
  generation: Generation
  id: number
  learned_by_pokemon: LearnedByPokemon[]
  machines: string[]
  meta: Meta
  name: string
  names: Name[]
  past_values: string[]
  power: number
  pp: number
  priority: number
  stat_changes: string[]
  super_contest_effect: SuperContestEffect
  target: Target
  type: Type
}

/**
 * Represents the ContestCombos data structure.
 */
export interface ContestCombos {
  normal: Normal
  super: Super
}

/**
 * Represents the Normal data structure.
 */
export interface Normal {
  use_after: string
  use_before: UseBefore[]
}

/**
 * Represents the UseBefore data structure.
 */
export interface UseBefore {
  name: string
  url: string
}

/**
 * Represents the Super data structure.
 */
export interface Super {
  use_after: string
  use_before: string
}

/**
 * Represents the ContestEffect data structure.
 */
export interface ContestEffect {
  url: string
}

/**
 * Represents the ContestType data structure.
 */
export interface ContestType {
  name: string
  url: string
}

/**
 * Represents the DamageClass data structure.
 */
export interface DamageClass {
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
  flavor_text: string
  language: Language2
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
 * Represents the Generation data structure.
 */
export interface Generation {
  name: string
  url: string
}

/**
 * Represents the LearnedByPokemon data structure.
 */
export interface LearnedByPokemon {
  name: string
  url: string
}

/**
 * Represents the Meta data structure.
 */
export interface Meta {
  ailment: Ailment
  ailment_chance: number
  category: Category
  crit_rate: number
  drain: number
  flinch_chance: number
  healing: number
  max_hits: string
  max_turns: string
  min_hits: string
  min_turns: string
  stat_chance: number
}

/**
 * Represents the Ailment data structure.
 */
export interface Ailment {
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
 * Represents the SuperContestEffect data structure.
 */
export interface SuperContestEffect {
  url: string
}

/**
 * Represents the Target data structure.
 */
export interface Target {
  name: string
  url: string
}

/**
 * Represents the Type data structure.
 */
export interface Type {
  name: string
  url: string
}
