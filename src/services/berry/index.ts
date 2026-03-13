/**
 * @file src/services/berry/index.ts
 * Service methods that wrap PokeAPI requests for a specific domain.
 */

import axiosInstance from "../../api/axios";
import type { BerryResponse } from "../../types/berry";
import type { IBerryService } from "./types";

/**
 * Service implementation for berry-related API resources.
 */
export const berryService: IBerryService = {
  getBerryById: async (id: string): Promise<BerryResponse> => {
    const response = await axiosInstance.get<BerryResponse>(`/berry/${id}`);
    return response.data;
  }
}
