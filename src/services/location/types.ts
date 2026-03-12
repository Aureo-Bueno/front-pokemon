import type { LocationResponse } from "../../types/location";

export interface ILocationService {
  getLocationById(id: string): Promise<LocationResponse>
}
