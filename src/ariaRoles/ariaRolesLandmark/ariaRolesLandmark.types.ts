import type { AriaRolesGeneric } from "../ariaRolesGeneric.types";
import type { ariaRolesLandmark } from "./ariaRolesLandmark";

export type AriaRoleLandmark = (typeof ariaRolesLandmark)[number];

export type AriaRolesLandmark = AriaRolesGeneric<AriaRoleLandmark>;
