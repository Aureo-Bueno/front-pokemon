/**
 * @file src/services/berry/types.ts
 * Service contract types for a specific domain module.
 */

import type { BerryResponse } from "../../types/berry";

/**
 * Represents the IBerryService data structure.
 */
export interface IBerryService {
  getBerryById(id: string): Promise<BerryResponse>
}
