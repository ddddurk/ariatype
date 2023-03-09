import { ariaRolesComposite } from "./ariaRolesComposite";
import { ariaRolesDocumentStructure } from "./ariaRolesDocumentStructure";
import { ariaRolesLandmark } from "./ariaRolesLandmark";
import { ariaRolesLiveRegion } from "./ariaRolesLiveRegion";
import { ariaRolesWidget } from "./ariaRolesWidget";
import { ariaRolesWindow } from "./ariaRolesWindow";

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
