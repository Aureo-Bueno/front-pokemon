import axiosInstance from "../../api/axios";
import type { MoveResponse } from "../../types/move";
import type { IMoveService } from "./types";

export const movesService: IMoveService = {
  getMoveById: async (id: string): Promise<MoveResponse> => {
    const response = await axiosInstance.get(`/move/${id}`);
    return response.data;
  }
}
