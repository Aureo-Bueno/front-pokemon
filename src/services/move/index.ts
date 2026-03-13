/**
 * @file src/services/move/index.ts
 * Service methods that wrap PokeAPI requests for a specific domain.
 */

import axiosInstance from "../../api/axios";
import type { MoveResponse } from "../../types/move";
import type { IMoveService } from "./types";

/**
 * Service implementation for move-related API resources.
 */
export const movesService: IMoveService = {
  getMoveById: async (id: string): Promise<MoveResponse> => {
    const response = await axiosInstance.get(`/move/${id}`);
    return response.data;
  }
}
