import axiosInstance from "../../api/axios";
import type { ItemResponse } from "../../types/item";
import type { IItemService } from "./types";

export const itemService: IItemService = {
  getItemById: async (id: string): Promise<ItemResponse> => {
    const response = await axiosInstance.get(`/item/${id}`);
    return response.data;
  }
}
