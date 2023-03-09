import type { AriaRoleComposite } from "./ariaRolesComposite";
import type { AriaRoleDocumentStructure } from "./ariaRolesDocumentStructure";
import type { AriaRolesGeneric } from "./ariaRolesGeneric.types";
import type { AriaRoleLandmark } from "./ariaRolesLandmark";
import type { AriaRoleLiveRegion } from "./ariaRolesLiveRegion";
import type { AriaRoleWidget } from "./ariaRolesWidget";
import type { AriaRoleWindow } from "./ariaRolesWindow";

export type AriaRole =
  | AriaRoleComposite
  | AriaRoleDocumentStructure
  | AriaRoleLandmark
  | AriaRoleLiveRegion
  | AriaRoleWidget
  | AriaRoleWindow;

export type AriaRoles = AriaRolesGeneric<AriaRole>;
