import type { AriaRolesGeneric } from "../ariaRolesGeneric.types";
import type { ariaRolesComposite } from "./ariaRolesComposite";

export type AriaRoleComposite = (typeof ariaRolesComposite)[number];

export type AriaRolesComposite = AriaRolesGeneric<AriaRoleComposite>;
