import type { AriaRolesGeneric } from "../ariaRolesGeneric.types";
import type { ariaRolesDocumentStructure } from "./ariaRolesDocumentStructure";

export type AriaRoleDocumentStructure =
  (typeof ariaRolesDocumentStructure)[number];

export type AriaRolesDocumentStructure =
  AriaRolesGeneric<AriaRoleDocumentStructure>;
