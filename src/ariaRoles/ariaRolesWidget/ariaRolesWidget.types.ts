import type { AriaRolesGeneric } from "../ariaRolesGeneric.types";
import type { ariaRolesWidget } from "./ariaRolesWidget";

export type AriaRoleWidget = (typeof ariaRolesWidget)[number];

export type AriaRolesWidget = AriaRolesGeneric<AriaRoleWidget>;
