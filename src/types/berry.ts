/**
 * @file src/types/berry.ts
 * TypeScript models for PokeAPI response payloads.
 */

/**
 * Represents the BerryResponse data structure.
 */
export interface BerryResponse {
  firmness: Firmness
  flavors: Flavor[]
  growth_time: number
  id: number
  item: Item
  max_harvest: number
  name: string
  natural_gift_power: number
  natural_gift_type: NaturalGiftType
  size: number
  smoothness: number
  soil_dryness: number
}

/**
 * Represents the Firmness data structure.
 */
export interface Firmness {
  name: string
  url: string
}

/**
 * Represents the Flavor data structure.
 */
export interface Flavor {
  flavor: Flavor2
  potency: number
}

/**
 * Represents the Flavor2 data structure.
 */
export interface Flavor2 {
  name: string
  url: string
}

/**
 * Represents the Item data structure.
 */
export interface Item {
  name: string
  url: string
}

/**
 * Represents the NaturalGiftType data structure.
 */
export interface NaturalGiftType {
  name: string
  url: string
}
