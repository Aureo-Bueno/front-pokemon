/**
 * @file src/services/move/types.ts
 * Service contract types for a specific domain module.
 */

import type { MoveResponse } from "../../types/move";

/**
 * Represents the IMoveService data structure.
 */
export interface IMoveService {
  getMoveById(id: string): Promise<MoveResponse>
}
