import type { AriaRolesGeneric } from "../ariaRolesGeneric.types";
import type { ariaRolesLiveRegion } from "./ariaRolesLiveRegion";

export type AriaRoleLiveRegion = (typeof ariaRolesLiveRegion)[number];

export type AriaRolesLiveRegion = AriaRolesGeneric<AriaRoleLiveRegion>;
