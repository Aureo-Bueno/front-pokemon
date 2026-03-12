import type { MoveResponse } from "../../types/move";

export interface IMoveService {
  getMoveById(id: string): Promise<MoveResponse>
}
