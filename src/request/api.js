/**
 * api接口统一管理
 */
import { get } from "./http";

export const test = p => get("/api/login", p);
