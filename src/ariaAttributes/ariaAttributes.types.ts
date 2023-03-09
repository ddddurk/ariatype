import type { AriaAttributesDragAndDrop } from "./ariaAttributesDragAndDrop";
import type { AriaAttributesGlobal } from "./ariaAttributesGlobal";
import type { AriaAttributesLiveRegion } from "./ariaAttributesLiveRegion";
import type { AriaAttributesRelationship } from "./ariaAttributesRelationship";
import type { AriaAttributesWidget } from "./ariaAttributesWidget";

export type AriaAttributes = AriaAttributesDragAndDrop &
  AriaAttributesGlobal &
  AriaAttributesLiveRegion &
  AriaAttributesRelationship &
  AriaAttributesWidget;
