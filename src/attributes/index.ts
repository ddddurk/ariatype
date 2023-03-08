import type { AriaAttributesDragAndDrop } from "./dragAndDrop";
import { ariaAttributesDragAndDrop } from "./dragAndDrop";
import type { AriaAttributesGlobal } from "./global";
import { ariaAttributesGlobal } from "./global";
import type { AriaAttributesLiveRegion } from "./liveRegion";
import { ariaAttributesLiveRegion } from "./liveRegion";
import type { AriaAttributesRelationship } from "./relationship";
import { ariaAttributesRelationship } from "./relationship";
import type { AriaAttributesWidget } from "./widget";
import { ariaAttributesWidget } from "./widget";

export type AriaAttributes = AriaAttributesDragAndDrop &
  AriaAttributesGlobal &
  AriaAttributesLiveRegion &
  AriaAttributesRelationship &
  AriaAttributesWidget;

export const ariaAttributes = [
  ...new Set([
    ...ariaAttributesDragAndDrop,
    ...ariaAttributesGlobal,
    ...ariaAttributesLiveRegion,
    ...ariaAttributesRelationship,
    ...ariaAttributesWidget
  ])
];

export * from "./dragAndDrop";
export * from "./global";
export * from "./liveRegion";
export * from "./relationship";
export * from "./widget";
