/**
 * api接口统一管理
 */
import { get, post } from "./http";

export const test = p => get("/api/login", p);
