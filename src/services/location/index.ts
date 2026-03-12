import axiosInstance from "../../api/axios";
import type { LocationResponse } from "../../types/location";
import type { ILocationService } from "./types";

export const locationService: ILocationService = {
  getLocationById: async (id: string): Promise<LocationResponse> => {
    const response = await axiosInstance.get<LocationResponse>(`/location/${id}`);
    return response.data;
  }
}
