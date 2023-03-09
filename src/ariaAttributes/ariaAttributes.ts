import { ariaAttributesDragAndDrop } from "./ariaAttributesDragAndDrop";
import { ariaAttributesGlobal } from "./ariaAttributesGlobal";
import { ariaAttributesLiveRegion } from "./ariaAttributesLiveRegion";
import { ariaAttributesRelationship } from "./ariaAttributesRelationship";
import { ariaAttributesWidget } from "./ariaAttributesWidget";

export const ariaAttributes = [
  ...new Set([
    ...ariaAttributesDragAndDrop,
    ...ariaAttributesGlobal,
    ...ariaAttributesLiveRegion,
    ...ariaAttributesRelationship,
    ...ariaAttributesWidget
  ])
];
