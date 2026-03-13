/**
 * @file src/services/location/types.ts
 * Service contract types for a specific domain module.
 */

import type { LocationResponse } from "../../types/location";

/**
 * Represents the ILocationService data structure.
 */
export interface ILocationService {
  getLocationById(id: string): Promise<LocationResponse>
}
