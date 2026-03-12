import type { BerryResponse } from "../../types/berry";

export interface IBerryService {
  getBerryById(id: string): Promise<BerryResponse>
}
