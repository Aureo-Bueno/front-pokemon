import type { ItemResponse } from "../../types/item";

export interface IItemService {
  getItemById(id: string): Promise<ItemResponse>
}
