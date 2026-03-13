/**
 * @file src/services/item/index.ts
 * Service methods that wrap PokeAPI requests for a specific domain.
 */

import axiosInstance from "../../api/axios";
import type { ItemResponse } from "../../types/item";
import type { IItemService } from "./types";

/**
 * Service implementation for item-related API resources.
 */
export const itemService: IItemService = {
  getItemById: async (id: string): Promise<ItemResponse> => {
    const response = await axiosInstance.get(`/item/${id}`);
    return response.data;
  }
}
