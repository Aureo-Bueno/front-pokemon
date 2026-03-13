/**
 * @file src/services/location/index.ts
 * Service methods that wrap PokeAPI requests for a specific domain.
 */

import axiosInstance from "../../api/axios";
import type { LocationResponse } from "../../types/location";
import type { ILocationService } from "./types";

/**
 * Service implementation for location-related API resources.
 */
export const locationService: ILocationService = {
  getLocationById: async (id: string): Promise<LocationResponse> => {
    const response = await axiosInstance.get<LocationResponse>(`/location/${id}`);
    return response.data;
  }
}
