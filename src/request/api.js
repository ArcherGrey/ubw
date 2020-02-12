/**
 * api接口统一管理
 */
import { get } from "./http";
import { prefix } from "./config";

export const login = p => get(`${prefix}/login`, p);
