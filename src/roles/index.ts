import type { AriaRoleComposite } from "./composite";
import { ariaRolesComposite } from "./composite";
import type { AriaRoleDocumentStructure } from "./documentStructure";
import { ariaRolesDocumentStructure } from "./documentStructure";
import type { AriaRoleLandmark } from "./landmark";
import { ariaRolesLandmark } from "./landmark";
import type { AriaRoleLiveRegion } from "./liveRegion";
import { ariaRolesLiveRegion } from "./liveRegion";
import type { AriaRoleWidget } from "./widget";
import { ariaRolesWidget } from "./widget";
import type { AriaRoleWindow } from "./window";
import { ariaRolesWindow } from "./window";

export type AriaRole =
  | AriaRoleComposite
  | AriaRoleDocumentStructure
  | AriaRoleLandmark
  | AriaRoleLiveRegion
  | AriaRoleWidget
  | AriaRoleWindow;

export const ariaRoles = [
  ...new Set([
    ...ariaRolesComposite,
    ...ariaRolesDocumentStructure,
    ...ariaRolesLandmark,
    ...ariaRolesLiveRegion,
    ...ariaRolesWidget,
    ...ariaRolesWindow
  ])
];

export * from "./composite";
export * from "./documentStructure";
export * from "./landmark";
export * from "./liveRegion";
export * from "./widget";
export * from "./window";
