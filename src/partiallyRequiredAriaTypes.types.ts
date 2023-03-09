import type { AriaTypes } from "./ariaTypes.types";
import type { PartiallyRequiredProps } from "./utils";

export type PartiallyRequiredAriaTypes<T extends keyof AriaTypes> =
  PartiallyRequiredProps<AriaTypes, T>;
