import axiosInstance from "../../api/axios";
import type { BerryResponse } from "../../types/berry";
import type { IBerryService } from "./types";

export const berryService: IBerryService = {
  getBerryById: async (id: string): Promise<BerryResponse> => {
    const response = await axiosInstance.get<BerryResponse>(`/berry/${id}`);
    return response.data;
  }
}
