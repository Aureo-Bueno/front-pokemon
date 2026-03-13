/**
 * @file src/services/item/types.ts
 * Service contract types for a specific domain module.
 */

import type { ItemResponse } from "../../types/item";

/**
 * Represents the IItemService data structure.
 */
export interface IItemService {
  getItemById(id: string): Promise<ItemResponse>
}
