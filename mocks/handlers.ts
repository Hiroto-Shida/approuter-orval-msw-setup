import { getColorsAPIMock } from "@/apiClient/colors/colorsAPI.msw";
import type { RequestHandler } from "msw";

// Orvalで生成されたモックハンドラーをここに記述
const orvalHandlers = [...getColorsAPIMock()];

// Orvalとは別で定義したモックハンドラーを追加する場合はここに記述
const originalHandlers: RequestHandler[] = [];

// モックハンドラを結合(originalHandlersを前にすることで、orvalHandlersを上書きするようにしておく)
export const handlers: RequestHandler[] = [
  ...originalHandlers,
  ...orvalHandlers,
];
