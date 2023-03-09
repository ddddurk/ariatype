import type { AriaRolesGeneric } from "../ariaRolesGeneric.types";
import type { ariaRolesWindow } from "./ariaRolesWindow";

export type AriaRoleWindow = (typeof ariaRolesWindow)[number];

export type AriaRolesWindow = AriaRolesGeneric<AriaRoleWindow>;
